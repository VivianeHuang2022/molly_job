import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from '../Login/Login.module.css';
import { Link } from "react-router-dom";



export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="smallSubText">EMAIL</div>
            <Form.Item
              name="Email"
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
