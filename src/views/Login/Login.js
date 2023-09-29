import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import './Login.css';



export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="backgroundLayer">
      <div className="containerStyle" >
        <div className="formStyle">
          <div className="title">
            <div className="largeText">Login</div>
            <div className="smallText">Sign in right now</div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div>Username</div>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Username!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <div>Password</div>
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

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{background:"black",margin:"10px"}}
              >
                Log in
              </Button>
              Or <a className="login-form-register" href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
