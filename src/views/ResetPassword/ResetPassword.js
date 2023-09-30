import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styles from "../Register/Register.module.css";
import logoImage from "../../assets/images/Logo.PNG";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.containerStyle}>
        <div className={styles.formStyle}>
          <div className="titleBox">
            <div className="largeText">Reset New Password</div>
            <div className="smallText">
              Remember? <Link to="/login">Login</Link>
            </div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="smallSubText">EMAIL</div>
            <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
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
                placeholder="New Password"
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
                Reset
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
