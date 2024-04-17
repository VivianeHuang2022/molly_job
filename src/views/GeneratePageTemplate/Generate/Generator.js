import React, { useState, useEffect } from 'react';
import {
  getDocumentStatus,
  fetchRemainingCounts,
} from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import styles from './generate.module.css';
import {
  PrimaryButton,
  DefaultButton,
  LoadingButton,
} from '../../../components/Button';
import { SecParagraphComp } from '../../../components/Typography';
import { MidTitleComp } from '../../../components/Typography';
import { editState } from '../../../utils/checkCache';

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

  useEffect(() => {
    fetchData();
  }, []);

  /*-------------操作-----------------*/
  const fetchData = async () => {
    try {
      const response = await fetchRemainingCounts();
      setAccountInfo(response.msg);
      let state;
      if (response.msg.firstTime) {
        state = 'newUser'; // 首次生成
      } else if (response.msg.remainingCount > 0) {
        state = 'hasCount'; // 有生成次数
      } else {
        state = 'noCount'; // 无次数
      }
      setCurrentState(state);
    } catch (error) {
      setErrorMessage(generateDocumentTexts.errorMessage + error.message);
    }
  };


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
      console.log(response)
      if (response.status === 200) {
        navigate(`/download`);
        localStorage.setItem('currentgenerate', documentType);
      }else if(response.status === 401)
      {
        navigate(`/login`);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  // 去支付页面
  const handleGoPaymentPage = () => {
    localStorage.setItem('currentgenerate', documentType);
    navigate(`/layout/payment`);
  };
  const handleBacktoEdit = () => {
    editState(`isEdit${documentType}/edit`, true);

    navigate(`/layout/${documentType}/edit`);
  };

  /*-------------渲染UI-----------------*/
  const renderError = () => (
    <div className={styles.error}>
      <MidTitleComp>{errorMessage}</MidTitleComp>
      <PrimaryButton
        label={generateDocumentTexts.buttonLabel.tryAgain}
        onClick={fetchData}
      />
      <div className={styles.contact}>
        <SecParagraphComp>
          contact email: viviane.huang@stu-de.org
        </SecParagraphComp>
      </div>
    </div>
  );

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
