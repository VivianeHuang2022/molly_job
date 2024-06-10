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
        setOrderResult(location.state.orderData);
      } else {
        const savedOrderData = localStorage.getItem('orderData');
        if (savedOrderData) {
          setOrderResult(JSON.parse(savedOrderData));
        }
      }
    };

    getOrderData();

    if (orderResult) {
      localStorage.setItem('orderData', JSON.stringify(orderResult));
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
      <div className={styles.card}>
        <h1 style={{ fontWeight: 'bold' }}>Success</h1>{' '}
        {/* Make the text bold 每12个词分一次段落*/}
        <p style={{ fontWeight: 'bold', color: '#FFFFFF' }}>
          {texts.orderResult.purchaseRequest.message}
        </p>
        <br />
        <p style={{ fontWeight: 'bold', color: '#FFFFFF' }}>
          {texts.orderResult.purchaseRequest.contact}
        </p>
        {orderResult?.msg === 'SUCCESS' ? (
          <>
            {/* Remove the upper-side and lower-side divs */}
            <PaymentDetails
              paymentInfo={orderResult}
              detailTexts={orderResultTexts.details}
            />
            <div className={styles.buttonsContainer}>
              <DefaultButton
                onClick={checkPayment}
                label={orderResultTexts.checkOrder}
              />
              <PrimaryButton
                onClick={backToGeneration}
                label={orderResultTexts.continueGenerate}
              />
              {/* <DefaultButton
                onClick={handleReturnPayment}
                label={orderResultTexts.backToPlan}
              /> */}
            </div>
          </>
        ) : (
          <>
            <TitleComp>{orderResultTexts.fail}</TitleComp>
            <ParagraphComp>
              <b>{orderResultTexts.failMessage}:</b> {orderResult?.errorMessage}{' '}
              {/* Make the text bold */}
            </ParagraphComp>
            <ParagraphComp>
              <b>{orderResultTexts.contact}</b> viviane.huang@stu-de.org{' '}
              {/* Make the text bold */}
            </ParagraphComp>
          </>
        )}
      </div>
    </div>
  );
};

export default PayFinishedPage;
