import React, { useState, useEffect } from 'react';
import { getDocumentStatus, fetchRemainingCounts } from '../../../utils/api';
import { editState } from '../../../utils/checkCache';

import { useNavigate } from 'react-router-dom';
import styles from './generate.module.css';

import { PrimaryButton, DefaultButton } from '../../../components/Button';
import { SecParagraphComp } from '../../../components/Typography';
import { MidTitleComp } from '../../../components/Typography';

const Generator = ({
  lan,
  generateDocumentTexts,
  countId,
  documentType,
  topicId,
}) => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [firstTimeGenerate, setFirstTimeGenerate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [notEnoughCountAlert, setnotEnoughCountAlert] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // 模拟获取账户信息
      // const response = { data: { remainingCount: 1, firstTime: false } };

      //实际获取的api
      const response = await fetchRemainingCounts();

      setAccountInfo(response.data);

      if (response.data.firstTime) {
        setFirstTimeGenerate(true); // 首次生成
      } else if (response.data.remainingCount > 0) {
        setShowConfirmation(true); //有生成次数
      } else {
        setnotEnoughCountAlert(true);
      }
    } catch (error) {
      setErrorMessage(generateDocumentTexts.errorMessage + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  });

  // 生成文件
  const handleGenerateClick = async () => {
    try {
      // 模拟获取账户信息
      // const response = { status: 200 };
      // console.log(documentType);

      //实际获取的api
      const response = await getDocumentStatus(
        countId,
        lan,
        documentType,
        topicId
      );
      if (response.status === 200) {
        navigate(`/download`);
        localStorage.setItem('currentgenerate', documentType);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  //去支付页面
  const handleGoPaymentPage = () => {
    localStorage.setItem('currentgenerate', documentType);
    navigate(`/layout/payment`);
  };

  //生成按钮&生成次数UI
  const GenerateButton = () => {
    return (
      <div className={styles.buttonMidContainer}>
        <PrimaryButton
          label={generateDocumentTexts.buttonLabel.generateDocument}
          onClick={handleGenerateClick}
          type="primary"
        />

        <div>
          {generateDocumentTexts.currentGenerateCountTips}:
          {accountInfo?.remainingCount}
        </div>
      </div>
    );
  };

  const handleBacktoEdit = () => {
    editState(`isEdit${documentType}`, true);

    if(documentType === 'coverletter'){
      navigate(`/layout/generalq`);
    }else {
      navigate(`/layout/${documentType}`);

    }
  };
  return (
    <div>
      {/* 有生成次数 & 确认消耗次数弹窗 */}
      {showConfirmation && (
        <div>
          <MidTitleComp>
            {generateDocumentTexts.confirmationContent.replace(
              '{remainingCount}',
              accountInfo?.remainingCount
            )}
          </MidTitleComp>
          <GenerateButton />
        </div>
      )}

      {/* 首次生成提示 */}
      {firstTimeGenerate && (
        <div>
          <MidTitleComp>{generateDocumentTexts.firstTimeMessage}</MidTitleComp>
          <GenerateButton />
        </div>
      )}

      {/* 支付引导提示 */}
      {notEnoughCountAlert && (
        <div>
          <MidTitleComp>
            {generateDocumentTexts.notEnoughCountMessage}
          </MidTitleComp>
          <div className={styles.buttonMidContainer}>
            <PrimaryButton
              type="primary"
              label={generateDocumentTexts.buttonLabel.goPayment}
              onClick={handleGoPaymentPage}
            />
          </div>
        </div>
      )}

      {/* 错误提示 */}
      {errorMessage && (
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
      )}
      <div className={styles.editButton}>
        <DefaultButton
          label={generateDocumentTexts.buttonLabel.backToEdit}
          onClick={handleBacktoEdit}
        />
      </div>
    </div>
  );
};

export default Generator;
