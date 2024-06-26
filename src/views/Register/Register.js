import React, { useRef, useContext, useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import styles from '../Register/Register.module.css';
import logoImage from '../../assets/images/Logo.PNG';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequset } from '../../utils/api';
import AlertContext from '../../components/AlertProvider/AlertContext';
import { getRegisterVerificationCode } from '../../utils/api';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { useSelector } from 'react-redux';
import { getLabels } from '../local';

export default function Register() {
  // 从 Redux store 中获取当前语言状态
  const currentLanguage = useSelector(selectCurrentLanguage);
  const texts = getLabels(currentLanguage);

  const { showAlertMessage } = useContext(AlertContext);
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  //const { id } = useParams();
  const [emailError, setEmailError] = useState(null);
  const [pwdError, setPwdError] = useState(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  //输入完成向后端发起请求
  //向后端请求验证码
  const handleGetCode = async () => {
    const emailValue = emailRef.current.input.value; // 获取email输入框的值
    const pwdValue = pwdRef.current.input.value; // 获取email输入框的值
    // console.log(emailValue)
    // console.log(pwdValue)
    if (!emailValue) {
      setEmailError('Please input your Email!');
    } else {
      setEmailError(null);
    }
    if (!pwdValue) {
      setPwdError('Please input your Password!');
    } else {
      setPwdError(null);
    }
    try {
      const request = {
        email: emailValue.trim(),
        pwd: pwdValue.trim(),
      };
      const result = await getRegisterVerificationCode(request);
      if (result.status === 200) {
        console.log(result.data.msg);
        showAlertMessage('Success', result.data.msg, 'success');
      } else {
        showAlertMessage('Error', 'unknown error!', 'error');
      }
    } catch (error) {
      if (error.response) {
        showAlertMessage('Error', error.response.data.msg, 'error');
      } else {
        showAlertMessage('Error', error.message, 'error');
      }
    }
  };

  //验证验证码
  const onFinish = async (formData) => {
    console.log('Received values of form: ', formData);
    let { email, password, captcha } = formData;
    const request = {
      email: email.trim(),
      pwd: password.trim(),
      verifyCode: captcha.trim(),
    };
    try {
      const result = await registerRequset(request);
      if (result.status === 200) {
        showAlertMessage('Success', result.data.msg, 'success');
        navigate('/login');
      } else {
        showAlertMessage('Error', 'unknown error!', 'error');
      }
    } catch (error) {
      if (error.response) {
        showAlertMessage('Warning', error.response.data.msg, 'warning');
      } else {
        alert(`Error:${error.message}`);
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
            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email' }]}
              help={emailError} // 显示错误信息
              validateStatus={emailError ? 'error' : ''}
            >
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
                { required: true, message: 'Please input your Password!' },
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
              dependencies={['password']}
              hasFeedback
              help={pwdError} // 显示错误信息
              validateStatus={pwdError ? 'error' : ''}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The new password that you entered do not match!'
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
            <Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message:
                          'Please input the Verification code you got from Eamil!',
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <SafetyCertificateOutlined className="site-form-item-icon" />
                      }
                      type="text"
                      placeholder="Verification code"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button
                    type="primary"
                    className="login-form-button"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = 'gray')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = 'black')
                    }
                    onClick={handleGetCode}
                  >
                    Get Captcha
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
                  (e.currentTarget.style.backgroundColor = 'gray')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = 'black')
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
