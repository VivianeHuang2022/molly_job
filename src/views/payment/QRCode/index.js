import React, { useEffect, useState } from 'react';
import styles from './QRCode.module.css';
import QRCodeComponent from './QRCodeComponent';

import { getLabels } from '../../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../redux/slices/languageSlice';

import { useLocation } from 'react-router-dom';
import { Image } from 'antd';

import { TitleComp, ParagraphComp } from '../../../components/Typography';
// import { DefaultButton } from '../../../components/Button';
import { ImageWithOverlay } from '../../../components/ImageWithOverlay';

import QRCode from '../../../assets/placeholder/pic.jpg';
import { fetchQRCodeImage } from '../../../utils/api';
import { fetchOrderStatus } from '../../../utils/api';

import { useNavigate } from 'react-router-dom';

const QRCodePage = () => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const navigate = useNavigate();

  const location = useLocation();
  const [planType, setPlanType] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState(QRCode);
  const [orderNumber, setOrderNumber] = useState(QRCode);

  const [qrState, setQRState] = useState('loading');

  // 处理用户所选的planType
  useEffect(() => {
    const fetchData = async () => {
      if (location.state?.planType) {
        setPlanType(location.state.planType);
      } else {
        const savedPlanType = localStorage.getItem('planType');
        if (savedPlanType) {
          setPlanType(savedPlanType);
        }
      }
      if (planType) {
        localStorage.setItem('planType', planType);

        // 调用API函数来获取QRCode图片
        try {
          const qrCodeData = await fetchQRCodeImage(planType);
          console.log(qrCodeData);
          if (qrCodeData.status === 200) {
            setQRState('show');
            setQRCodeImage(qrCodeData.data.qrCode); // Assuming qrCodeData contains the image data
            setOrderNumber(qrCodeData.data.orderNumber);
          } else {
            setQRState('error');
          }
        } catch (error) {
          setQRState('error');
        }
      }
    };

    fetchData();
  }, [location.state?.planType, planType]);

  // 处理订单状态的轮询和跳转逻辑
  useEffect(() => {
    let intervalId;

    const fetchOrder = async () => {
      try {
        const orderData = await fetchOrderStatus(orderNumber);
        console.log(orderData.msg);
        if (orderData.code === 0 && orderData.msg === 'SUCCESS') {
          clearInterval(intervalId);
          navigate('/payment/complete', { state: { orderData } });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (qrState === 'show') {
      console.log(qrState);
      fetchOrder(); // 执行一次以立即检查订单状态
      intervalId = setInterval(fetchOrder, 5000); // 每5秒轮询一次订单状态
    }

    return () => clearInterval(intervalId); // 在组件卸载或者状态改变时清除interval
  }, [qrState, navigate]);

  // 如果未找到planType，则不展示QRCodeComponent
  if (!planType) {
    ///console.log(planType)
    return (
      <div className={styles.qrPageContainer}>
        <TitleComp>{texts.QRCode.error.reason.paymentNotFound}</TitleComp>
        <ParagraphComp>{texts.QRCode.error.actionTip}</ParagraphComp>
      </div>
    );
  }

  const fetchQRCode = async () => {
    try {
      const qrCodeData = await fetchQRCodeImage(planType);
      console.log(qrCodeData);
      if (qrCodeData.status === 401) {
        navigate('/login');
      }
      if (qrCodeData.status === 200) {
        setQRState('show');
        setQRCodeImage(qrCodeData.data.qrCode);
      } else {
        setQRState('error');
      }
    } catch (error) {
      setQRState('error');
    }
  };

  return (
    <div className={styles.qrPageContainer}>
      <TitleComp>{texts.QRCode.pageTitle}</TitleComp>
      {qrState === 'loading' && (
        <>
          <ParagraphComp>二维码加载中...</ParagraphComp>
          <Image src={qrCodeImage} />
        </>
      )}
      {qrState === 'error' && (
        <>
          <ParagraphComp>{texts.QRCode.error.reason.qrNotLoad}</ParagraphComp>
          <ImageWithOverlay
            styles={styles}
            qrCodeImage={qrCodeImage}
            expired={true}
            refreshImage={fetchQRCode}
            buttonText={texts.QRCode.error.actionTip}
          />
        </>
      )}
      {qrState === 'show' && (
        <QRCodeComponent
          paymentType={planType}
          texts={texts}
          Paragraph={ParagraphComp}
          qrCodeImage={qrCodeImage}
          min={2}
          fetchQRCode={fetchQRCode}
        />
      )}

      {/* <DefaultButton onClick={testFinish} label="test finished" /> */}
    </div>
  );
};

export default QRCodePage;
