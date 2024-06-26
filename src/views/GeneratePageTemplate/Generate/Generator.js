import React, { useState, useEffect, useCallback } from 'react';
import { getDocumentStatus, fetchRemainingCounts } from '../../../utils/api';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './generate.module.css';
import {
  PrimaryButton,
  DefaultButton,
  LoadingButton,
} from '../../../components/Button';
import { SecParagraphComp } from '../../../components/Typography';
import { MidTitleComp } from '../../../components/Typography';
import { editState } from '../../../utils/checkCache';
import { CON_EMAIL } from '../../../utils/constant';

const Generator = ({
  lan,
  generateDocumentTexts,
  countId,
  documentType,
  topicId,
}) => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [currentState, setCurrentState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  /*-------------操作-----------------*/
  const fetchData = useCallback(async () => {
    try {
      const response = await fetchRemainingCounts();
      setAccountInfo(response.data.msg);
      let state;

      if (response.data.msg.firstTime) {
        state = 'newUser'; // 首次生成
      } else if (response.data.msg.remainingCount > 0) {
        state = 'hasCount'; // 有生成次数
      } else {
        state = 'noCount'; // 无次数
      }
      setCurrentState(state);
    } catch (error) {
      if (error.response.status === 401) {
        navigate(`/login?returnUrl=${encodeURIComponent(location.pathname)}`);
      }
      setErrorMessage(generateDocumentTexts.errorMessage + error.message);
    }
  }, [generateDocumentTexts.errorMessage, location.pathname, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 生成文件
  const handleGenerateClick = async () => {
    setCurrentState('loading');
    try {
      const response = await getDocumentStatus(
        countId,
        lan,
        documentType,
        topicId
      );
      console.log(response.status);
      if (response.status === 200) {
        navigate(`/download`);
        localStorage.setItem('currentgenerate', documentType);
      } else {
        // 处理非200状态码的逻辑
        console.log(`Received unexpected status code: ${response.status}`);
        setCurrentState('');
        setErrorMessage(generateDocumentTexts.errorMessage + response.status);
      }
    } catch (error) {
      setCurrentState('');
      setErrorMessage(generateDocumentTexts.errorMessage + error.message);

      // 检查是否有响应对象，如果有，检查状态码
      if (error.response) {
        const statusCode = error.response.status;

        // 根据状态码进行不同的处理
        if (statusCode === 401) {
          // 处理未授权的情况
          navigate(`/login?returnUrl=${encodeURIComponent(location.pathname)}`);
        } else {
          // 处理其他状态码的情况
          setErrorMessage(
            `有响应Server responded with status code: ${statusCode}`
          );
        }
      } else {
        // 处理没有响应对象的情况，例如网络错误或请求被阻止
        setErrorMessage(
          `处理没有响应对象的情况，例如网络错误或请求被阻止Network error or request was blocked: ${error.message}`
        );
      }
    }
  };
  // 去支付页面
  const handleGoPaymentPage = () => {
    localStorage.setItem('currentgenerate', documentType);
    navigate(`/layout/payment`);
  };
  const handleBacktoEdit = () => {
    editState(`isEdit${documentType}/edit`, true);
    if (documentType === 'coverletter') {
      navigate(`/layout/generalq`);
    } else {
      navigate(`/layout/${documentType}/edit`);
    }
  };

  /*-------------渲染UI-----------------*/
  const renderError = () => {
    console.log(errorMessage);
    return (
      <div className={styles.error}>
        <MidTitleComp>{errorMessage}</MidTitleComp>
        <PrimaryButton
          label={generateDocumentTexts.buttonLabel.tryAgain}
          onClick={fetchData}
        />
        <div className={styles.contact}>
          <SecParagraphComp>contact email: {CON_EMAIL}</SecParagraphComp>
        </div>
      </div>
    );
  };

  const renderNewUser = () => (
    <div className={styles.buttonMidContainer}>
      <MidTitleComp>{generateDocumentTexts.firstTimeMessage}</MidTitleComp>
      <PrimaryButton
        label={generateDocumentTexts.buttonLabel.generateDocument}
        onClick={handleGenerateClick}
      />
    </div>
  );

  const renderHasCount = () => (
    <div className={styles.buttonMidContainer}>
      <MidTitleComp>
        {generateDocumentTexts.confirmationContent.replace(
          '{remainingCount}',
          accountInfo?.remainingCount
        )}
      </MidTitleComp>
      <PrimaryButton
        label={generateDocumentTexts.buttonLabel.generateDocument}
        onClick={handleGenerateClick}
      />
      <div>
        {generateDocumentTexts.currentGenerateCountTips}:{' '}
        {accountInfo?.remainingCount}
      </div>
    </div>
  );

  const renderNoCount = () => (
    <div className={styles.buttonMidContainer}>
      <MidTitleComp>{generateDocumentTexts.notEnoughCountMessage}</MidTitleComp>
      <PrimaryButton
        onClick={handleGoPaymentPage}
        label={generateDocumentTexts.buttonLabel.goPayment}
      />
    </div>
  );

  const renderLoading = () => (
    <div className={styles.buttonMidContainer}>
      <MidTitleComp>{generateDocumentTexts.generateLoading}</MidTitleComp>
      <LoadingButton
        label={generateDocumentTexts.buttonLabel.generateLoading}
      />
    </div>
  );

  const renderState = () => {
    switch (currentState) {
      case 'loading':
        return renderLoading();
      case 'newUser':
        return renderNewUser();
      case 'hasCount':
        return renderHasCount();
      case 'noCount':
        return renderNoCount();
      default:
        return renderError();
    }
  };

  return (
    <div className={styles.container}>
      {renderState()}
      <div className={styles.buttonMidContainer}>
        <DefaultButton
          label={generateDocumentTexts.buttonLabel.backToEdit}
          onClick={handleBacktoEdit}
        />
      </div>
    </div>
  );
};

export default Generator;
