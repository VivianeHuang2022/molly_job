import React, { useContext, useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "../Login/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { loginRequset } from "../../utils/api";
import AlertContext from "../../components/AlertProvider/AlertContext";

export default function Login() {
  const navigate = useNavigate();
  const { showAlertMessage } = useContext(AlertContext);
  const [showModal, setShowModal] = useState(false);
  const rememberEmail = localStorage.getItem("email");
  const rememberPassword = localStorage.getItem("password");
  const id = localStorage.getItem("topicId");
  //输入完成请求后端
  const onFinish = async (formData) => {
    let { email, password, remember } = formData;
    const request = {
      email: email,
      pwd: password,
    };
    if (remember) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email", email);
      localStorage.removeItem("password", password);
    }
    try {
      const result = await loginRequset(request);
      //成功之后跳转到Login界面
      if (result.status === 200) {
        showAlertMessage("Success", result.data.msg, "success");

        id === 2 ? setShowModal(true) : navigate("/home/1");

        const token = result.data.msg;
        //把token存在localStorage中
        localStorage.setItem("token", token);
      } else {
        //alert("unknown error!")
        showAlertMessage("Error", "unknown error!", "error");
      }
    } catch (error) {
      if (error.response) {
        showAlertMessage("Warning", error.response.data.msg, "warning");
      } else {
        // alert(`Error:${error.message}`)
        showAlertMessage("Error", error.message, "error");
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
            initialValues={{
              remember: true,
              email: rememberEmail ? rememberEmail : "",
              password: rememberPassword ? rememberPassword : "",
            }}
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
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link className="login-form-forgot" to="/resetpassword">
                Forgot password
              </Link>
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
                Log in
              </Button>
              Or{" "}
              <Link
                className="login-form-register"
                to={`/register/${id || "1"}`}
              >
                register now!
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
