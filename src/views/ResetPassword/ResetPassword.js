import React, { useState, useRef } from "react";
import { LockOutlined, MailOutlined,SafetyCertificateOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import styles from "../Register/Register.module.css";
import logoImage from "../../assets/images/Logo.PNG";
import { Link,useNavigate} from "react-router-dom";
import { getVerificationCode, resetPasswordRequest } from "../../utils/api";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(null);
  const [pwdError, setPwdError] = useState(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  //向后端请求验证码
  const handleGetCode = async () => {
    const emailValue = emailRef.current.input.value; // 获取email输入框的值
    const pwdValue = pwdRef.current.input.value; // 获取email输入框的值
    if (!emailValue) {
      setEmailError("Please input your Email!");
    } else{
      setEmailError(null)
    }
    if (!pwdValue) {
      setPwdError("Please input your Password!");
    }
    else{
      setPwdError(null)
    } 
    try {
      const request = {
        email:emailValue,
        pwd:pwdValue
      }
      const result = await getVerificationCode(request)
      if (result.status === 200) {
        alert(result.data.msg)
      }else{
        alert("unknown error!")
      }
    } catch (error) {
      if (error.response) {
        if(error.response.status===404&error.response.data.code===1005){
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

  //带上验证码，重置密码
  const onFinish = async (formData) => {
    console.log("Received values of form: ", formData);
    let{email,password,captcha} = formData
    const request ={
      email:email,
      pwd:password,
      verifyCode:captcha
    }
    try {
      const result = await resetPasswordRequest(request)
    if (result.status === 200) {
      alert(result.data.msg)
      navigate("/login");
    }
    else{
      alert("unknown error!")
    }
    } catch (error) {
      if (error.response) {
        if(error.response.status===404&error.response.data.code===1006){
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
            <div className="largeText">Reset Your Password</div>
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
            <Form.Item name="email" rules={[{ required: true, type: "email" }]} help={emailError} // 显示错误信息
              validateStatus={emailError ? "error" : ""}>
              <Input
                ref={emailRef} // 设置引用
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
              help={pwdError} // 显示错误信息
              validateStatus={pwdError ? "error" : ""}
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
                ref={pwdRef} // 设置引用
              />
            </Form.Item>
            <Form.Item
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input the Verification code you got from Eamil!",
                      },
                    ]}
                  >
                    <Input 
                    prefix={<SafetyCertificateOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Verification code"/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button type="primary"
                className="login-form-button"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "gray")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "black")
                }
                onClick={handleGetCode}
                >Get Captcha
                </Button>
                </Col>
              </Row>
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
