import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button,Form, Input } from "antd";
import '../Register/Register.css'
import logoImage from '../../assets/images/Logo.PNG'; 



export default function Register() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="backgroundLayer">
      <div className="containerStyle" >
        <div className="formStyle">
          <div className="title">
            <div className="largeText">Create New Account</div>
            <div className="smallText">Already registered? Login</div>
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'gray'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'black'}
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <img src={logoImage} alt="logo" className="logo"></img>
        </div>
      </div>
    </div>
  );
}
