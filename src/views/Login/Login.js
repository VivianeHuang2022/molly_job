import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from '../Login/Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { loginRequset } from "../../utils/api";



export default function Login() {
  const navigate = useNavigate();
  const rememberEmail = localStorage.getItem("email")
  const rememberPassword = localStorage.getItem("password")
  const onFinish = async (formData) => {
    let{email,password,remember} = formData
    const request ={
      email:email,
      pwd:password
    }
    if (remember) {
      localStorage.setItem("email",email)
      localStorage.setItem("password",password)
    }
    else{
      localStorage.removeItem("email",email)
      localStorage.removeItem("password",password)
    }
    try {
      const result = await loginRequset(request)
      //成功之后跳转到Login界面
      if (result.status === 200) {
        navigate('/home');
        const token = result.data.msg
        //把token存在localStorage中
        localStorage.setItem('token', token);
      }
      else{
        alert("unknown error!")
      }
    } catch (error) {
      if (error.response) {
        if(error.response.status===400&error.response.data.code===1002){
          alert(error.response.data.msg);
        }
        else{
          alert(`Error:${error.message}`)
        }
    } else {
      alert(`Error:${error.message}`)
    }
    }
  };

  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.containerStyle}>
        <div className={styles.formStyle}>
          <div className="titleBox">
            <div className="largeText">Login</div>
            <div className="smallText">Sign in to continue</div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true , 
              email:rememberEmail?rememberEmail:"", 
              password:rememberPassword?rememberPassword:""}}
            onFinish={onFinish}
          >
            <div className="smallSubText">EMAIL</div>
            <Form.Item
              name="email"
              rules={[{ required: true,type: 'email'}]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email" 
              />
            </Form.Item>
            <div className="smallSubText">PASSWORD</div>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              {/*  */}
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link className="login-form-forgot" to="/resetpassword">Forgot password</Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'gray'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'black'}
              >
                Log in
              </Button>
              Or <Link className="login-form-register" to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
