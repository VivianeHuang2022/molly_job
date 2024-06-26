import { useState, useEffect, useContext } from 'react';
import {
  getDocumentImg,
  downloadDocumentPdf,
  getDocumentPdf,
  sendFilesToEmail,
} from '../../utils/api';
import AlertContext from '../../components/AlertProvider/AlertContext';

import styles from './Download.module.css';

// import MockImage from '../../assets/cover/coverletterEnglish/Cover_letter_English_1.jpg';

import { PrimaryButton, DefaultButton } from '../../components/Button';
import {
  MidTitleComp,
  ParagraphComp,
  SecParagraphComp,
} from '../../components/Typography';

import { getLabels } from '../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { CON_EMAIL } from '../../utils/constant';
// import { useNavigate } from 'react-router-dom';

const DownloadPage = ({ topicId }) => {
  const { showAlertMessage } = useContext(AlertContext);
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const downloadTexts = texts.download;
  const rememberEmail = localStorage.getItem('email');
  const [sentEmail, setSentEmail] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('notStart'); //三种状态:未开始notStart、下载成功success、下载失败failed

  const documentType = localStorage.getItem('currentgenerate');

  const [pdfSrc, setPdfSrc] = useState(null);
  const [generationTime, setGenerationTime] = useState('暂未获取到时间');
  // const [coverLetterData] = useState({});
  const countId = localStorage.getItem(`countId_${documentType}`)
    ? localStorage.getItem(`countId_${documentType}`)
    : 0;

  const lan = localStorage.getItem('generateLan');

  useEffect(() => {
    // 在组件加载时获取展示的预览pdf
    const fetchPreview = async () => {
      try {
        const response = await getDocumentPdf(
          countId,
          lan,
          documentType,
          topicId
        );
        if (response.status === 200) {
          const { pdf, generationTime } = response.data.msg;
          console.log(response);

          const byteCharacters = atob(pdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);

          const blob = new Blob([byteArray], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          console.log(url);
          setPdfSrc(url);
          //生成时间在这里更新
          setGenerationTime(generationTime);
        }
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    };

    fetchPreview();
  }, [countId, documentType, lan, topicId]);

  const handleDownloadClick = async () => {
    //20240626 lily 这里pdf下载不需要再请求接口,直接用前面fetchpreview获取的文件即可
    if (pdfSrc) {
      const url = pdfSrc;
      const a = document.createElement('a');
      a.href = url;
      a.download = `Molly_${documentType}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setDownloadStatus('success');
    } else {
      setDownloadStatus('failed');
      showAlertMessage(texts.tips.error, '文件url失效', 'error');
    }

    //发送邮件,如果发送不成功将不提示发送邮箱的提示
    try {
      const response = await sendFilesToEmail(
        countId,
        lan,
        documentType,
        topicId
      );
      if (response.status === 200) {
        showAlertMessage(
          texts.tips.success,
          '生成的文件同时发送到了你的邮箱中',
          'success'
        );
        setSentEmail(true);
      }
    } catch (error) {
      console.error('Error fetching PDF: ', error);
    }
  };

  const handleBackClick = () => {
    //这里用window.open是为了不在一个标签页进行跳转,0519跟@🇩🇪Viviane 聊的方案 保留之前的下载页 便于用户回溯
    window.open(`/#/layout/${documentType}/edit`, '_blank'); //这里按0419 规划的流程就是应该要去编辑页的,用户每次返回重新生成肯定是要对某些内容进行调整的

    // navigate(`/layout/${documentType}/generate`)
  };

  const renderTitleWithDownloadStatus = (downloadStatus) => {
    switch (downloadStatus) {
      case 'success':
        return <MidTitleComp>{downloadTexts.downloadSuccess}</MidTitleComp>;
      case 'failed':
        return (
          <MidTitleComp>
            {downloadTexts.failed}:{CON_EMAIL}
          </MidTitleComp>
        );
      default:
        return <MidTitleComp>{downloadTexts.documentGenerated}</MidTitleComp>;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.previewContainer}>
        {pdfSrc && (
          <iframe
            src={pdfSrc}
            width="100%"
            height="100%"
            title="PDF Viewer"
          ></iframe>
        )}
      </div>
      <div className={styles.operationContainer}>
        {renderTitleWithDownloadStatus(downloadStatus)}

        {/* 如果有邮箱会发邮箱，没有邮箱暂时隐藏了 */}
        {sentEmail && rememberEmail && (
          <ParagraphComp>
            {downloadTexts.downloadNotice}:{rememberEmail}
          </ParagraphComp>
        )}

        <div className={styles.operationButtonsContainer}>
          <PrimaryButton
            onClick={handleDownloadClick}
            label={downloadTexts.downloadPdf}
          />
        </div>
        <SecParagraphComp>
          {downloadTexts.generationTime} : {generationTime}
        </SecParagraphComp>
        {/* <SecParagraphComp>
          {downloadTexts.contactEmail}: {CON_EMAIL}
        </SecParagraphComp> */}

        <div className={styles.operationButtonsContainer}>
          <DefaultButton
            onClick={handleBackClick}
            label={downloadTexts.backToGenerate}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
