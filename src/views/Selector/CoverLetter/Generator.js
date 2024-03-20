import React, { useState, useEffect } from 'react';
import { generateCoverLetter, fetchRemainingCounts } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import styles from './CoverLetter.module.css';

import { PrimaryButton, DefaultButton } from '../../../components/Button';
import { MidTitleComp, SecParagraphComp } from '../../../components/Typography';
import { Typography } from 'antd';
const { Text } = Typography;

const Generator = ({ uId, countId, lan, generateDocumentTexts }) => {
  // 状态
  const [accountInfo, setAccountInfo] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [firstTimeGenerate, setFirstTimeGenerate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [notEnoughCountAlert, setnotEnoughCountAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        // 模拟获取账户信息
        const response = { data: { remainingCount: 1, firstTime: false } };

        //实际获取的api
        // const response = await fetchRemainingCounts();

        setAccountInfo(response.data);

        if (response.data.firstTime) {
          setFirstTimeGenerate(true); // 首次生成
        } else if (response.data.remainingCount > 0) {
          setShowConfirmation(true); //有生成次数
        } else {
          setnotEnoughCountAlert(true);
        }
      } catch (error) {
        setErrorMessage(generateDocumentTexts.Message + error.message);
      }
    }

    fetchData();
  }, []);

  // 生成文件
  const handleGenerateClick = async () => {
    try {
      const response = await generateCoverLetter(uId, countId, lan);
      if (response.status == 200) {
        navigate('/download');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  //去支付页面
  const handleGoPaymentPage = () => {
    navigate('/payment');
  };

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

        {/* 方便test */}
        <MidTitleComp>下面这个按钮是为了方便test:</MidTitleComp>
        <DefaultButton
          label={generateDocumentTexts.buttonLabel.goPayment}
          onClick={handleGoPaymentPage}
        />
      </div>
    );
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
        <div>
          <MidTitleComp>{errorMessage}</MidTitleComp>
        </div>
      )}
    </div>
  );
};

export default Generator;
