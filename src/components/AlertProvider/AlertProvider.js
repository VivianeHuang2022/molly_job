import React, { useState } from 'react';
import {Alert } from 'antd';
import AlertContext from './AlertContext'; 
import './AlertProvider.css';

export default function AlertProvider ({ children }){
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('success');
  const [description, setDescription] = useState('success');
  const [fadeOut, setFadeOut] = useState(false);

  const showAlertMessage = (msg, des, alertType = 'success') => {
    setMessage(msg);
    setType(alertType);
    setDescription(des)
    setShowAlert(true);
    setTimeout(() => {
        setFadeOut(true);
        // 给渐隐动画足够的时间来完全执行
        setTimeout(() => {
          setShowAlert(false);
          setFadeOut(false);
        }, 3000);
      }, 3000);
  };

  const hideAlertMessage = () => {
    setShowAlert(false);
    setMessage(null);
    setType('success');
    setFadeOut(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert, message, type, description, showAlertMessage, hideAlertMessage }}>
      {/* <Modal
        open={showAlert}
        onOk={hideAlertMessage}
        onCancel={hideAlertMessage}
        centered
        footer={null}
        closeIcon={null}
        wrapClassName="customModal"
      >
         <Alert className={fadeOut ? 'fade-out' : ''} message={message} type={type} showIcon />
      </Modal> */}
      {showAlert && 
         <Alert 
            style={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000
            }}
            className={fadeOut ? 'fade-out' : ''} 
            message={message} 
            type={type}
            description = {description}
            showIcon 
          />
      }
      {children}
    </AlertContext.Provider>
  );
};
