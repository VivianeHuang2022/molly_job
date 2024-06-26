import React, { useContext } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from '../Login/Login.module.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { loginRequset } from '../../utils/api';
import AlertContext from '../../components/AlertProvider/AlertContext';
import {
  switchLanguage,
  selectCurrentLanguage,
} from '../../redux/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getLabels } from '../local';

export default function Login() {
  // 从 Redux store 中获取当前语言状态
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const texts = getLabels(currentLanguage);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 在React Router v6中，推荐用 useSearchParams 来处理查询参数
  const returnUrl = searchParams.get('returnUrl');

  const { showAlertMessage } = useContext(AlertContext);
  // const [showModal, setShowModal] = useState(false);

  const rememberEmail = localStorage.getItem('email');
  const rememberPassword = localStorage.getItem('password');
  const id = localStorage.getItem('topicId');
  //输入完成请求后端
  const onFinish = async (formData) => {
    let { email, password, remember } = formData;
    const request = {
      email: email.trim(),
      pwd: password.trim(),
    };
    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email', email);
      localStorage.removeItem('password', password);
    }
    try {
      const result = await loginRequset(request);
      //成功之后跳转到Login界面
      if (result.status === 200) {
        showAlertMessage('Success', 'Login successfully!', 'success');
        const token = result.data.msg;
        //把token存在localStorage中
        localStorage.setItem('jwtToken', token);

        // 登录成功后，根据returnUrl进行重定向
        if (returnUrl) {
          console.log(returnUrl);
          navigate(returnUrl);
        } else {
          navigate(`/home/${id}`);
        }
      } else {
        //alert("unknown error!")
        showAlertMessage('Error', 'unknown error!', 'error');
      }
    } catch (error) {
      // console.log("herr")
      if (error.response) {
        if (error.response.data.msg) {
          showAlertMessage('Warning', error.response.data.msg, 'warning');
        } else {
          showAlertMessage('Warning', error.response.statusText, 'warning');
        }

        if (error.response.data.code === 1006) {
          navigate('/register');
        }
      } else {
        // alert(`Error:${error.message}`)
        showAlertMessage('Error', error.message, 'error');
      }
    }
  };

  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.containerStyle}>
        <div className={styles.formStyle}>
          <div className="titleBox">
            <div className="largeText">{texts.login.title}</div>
            <div className="smallText">{texts.login.subTitle}</div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              email: rememberEmail || '',
              password: rememberPassword || '',
            }}
            onFinish={onFinish}
          >
            <div className="smallSubText">{texts.login.emailLabel}</div>
            <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder={texts.login.emailPlaceholder}
              />
            </Form.Item>
            <div className="smallSubText">{texts.login.passwordLabel}</div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: texts.login.passwordRequiredMessage,
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={texts.login.passwordPlaceholder}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{texts.login.rememberMe}</Checkbox>
              </Form.Item>
              <Link className="login-form-forgot" to="/resetpassword">
                {texts.login.forgotPassword}
              </Link>
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
                {texts.login.loginButton}
              </Button>{' '}
              <span>{texts.login.or}</span> /
              <Link className="login-form-register" to="/register">
                {texts.login.registerNow}
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
