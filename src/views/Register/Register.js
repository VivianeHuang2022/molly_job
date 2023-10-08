import React,{useContext} from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";
import styles from "../Register/Register.module.css";
import logoImage from "../../assets/images/Logo.PNG";
import { Link, useNavigate } from "react-router-dom";
import { registerRequset } from "../../utils/api";
import AlertContext from '../../components/AlertProvider/AlertContext';

export default function Register() {
  const { showAlertMessage } = useContext(AlertContext);
  const navigate = useNavigate();
  //输入完成向后端发起请求
  const onFinish = async (formData) => {
    try {
      let { email, password } = formData;
      const request = {
        email: email,
        pwd: password,
      };
      const result = await registerRequset(request);
      //成功之后跳转到Login界面
      if (result.status === 200) {
        showAlertMessage("Success",result.data.msg,"success")
        navigate("/login");
      }else{
        showAlertMessage("Error","unknown error!","error")
      }
    } catch (error) {
      if (error.response) {
        if ((error.response.data.code === 1001)) 
        {
          showAlertMessage("Warning",error.response.data.msg,"warning")
          navigate("/login");
        }
        if ((error.response.data.code === 1007)) 
        {
          showAlertMessage("Error",error.response.data.msg,"error")
        } 
      } else {
        showAlertMessage("Error", error.message,"error")
      }
    }
  };

  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.containerStyle}>
        <div className={styles.formStyle}>
          <div className="titleBox">
            <div className="largeText">Create New Account</div>
            <div className="smallText">
              Already registered? <Link to="/login">Login</Link>
            </div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="smallSubText">EMAIL</div>
            <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <div className="smallSubText">PASSWORD</div>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              {/*  */}
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <div className="smallSubText">CONFIRM</div>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "gray")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "black")
                }
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <img src={logoImage} alt="logo" className={styles.logo}></img>
        </div>
      </div>
    </div>
  );
}
