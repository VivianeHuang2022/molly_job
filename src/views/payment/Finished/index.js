import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DefaultButton, PrimaryButton } from '../../../components/Button';

import { TitleComp, ParagraphComp } from '../../../components/Typography';

import { getLabels } from '../../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../redux/slices/languageSlice';

import PaymentDetails from './PaymentDetails';
import styles from './Finished.module.css';

const PayFinishedPage = () => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const orderResultTexts = texts.orderResult;

  const navigate = useNavigate();
  const location = useLocation();
  const [orderResult, setOrderResult] = useState(null);

  useEffect(() => {
    const getOrderData = () => {
      if (location.state?.orderData) {
        // 如果在useLocation中获取到，则直接使用
        setOrderResult(location.state.orderData);
      } else {
        // 否则尝试从本地存储中获取
        const savedOrderData = localStorage.getItem('orderData');
        if (savedOrderData) {
          setOrderResult(savedOrderData);
        }
      }
    };

    getOrderData();

    // 存储订单数据
    if (orderResult) {
      localStorage.setItem('orderData', orderResult);
    }
  }, [location.state?.orderData, orderResult]);

  const handleReturnPayment = () => {
    navigate('/payment');
  };

  const backToGeneration = () => {
    const documentType = localStorage.getItem('currentgenerate');
    navigate(`/layout/${documentType}`);
  };

  const checkPayment = () => {
    navigate('/generateCounts_history');
  };

  return (
    <div className={styles.pageContainer}>
      {orderResult?.msg === 'SUCCESS' ? (
        <div>
          <TitleComp>{orderResultTexts.success}</TitleComp>
          <PaymentDetails
            paymentInfo={orderResult}
            detailTexts={orderResultTexts.details}
          />
          <div>
            <DefaultButton
              onClick={checkPayment}
              label={orderResultTexts.checkOrder}
            />
            <PrimaryButton
              onClick={backToGeneration}
              label={orderResultTexts.continueGenerate}
            />
          </div>
          <DefaultButton
            onClick={handleReturnPayment}
            label={orderResultTexts.backToPlan}
          />
        </div>
      ) : (
        <>
          <TitleComp>Payment Failed!</TitleComp>
          <ParagraphComp>
            {orderResultTexts.fail}: {orderResult?.errorMessage}
          </ParagraphComp>
          <ParagraphComp>
            {orderResultTexts.contact}viviane.huang@stu-de.org。
          </ParagraphComp>
        </>
      )}
    </div>
  );
};

export default PayFinishedPage;
