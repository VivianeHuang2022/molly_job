import { useState, useEffect, useContext } from 'react';
import { getDocumentImg, downloadDocumentPdf } from '../../utils/api';
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
// import { useNavigate } from 'react-router-dom';

const DownloadPage = ({ topicId }) => {
  const { showAlertMessage } = useContext(AlertContext);
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const downloadTexts = texts.download;
  const rememberEmail = localStorage.getItem('email');
  const documentType = localStorage.getItem('currentgenerate');
  // const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState(null);
  const [generationTime, setGenerationTime] = useState('暂未获取到时间');
  // const [coverLetterData] = useState({});
  const countId = localStorage.getItem(`countId_${documentType}`)
    ? localStorage.getItem(`countId_${documentType}`)
    : 0;

  const lan = localStorage.getItem('generateLan');

  useEffect(() => {
    // 在组件加载时获取图片
    const fetchImage = async () => {
      try {
        const response = await getDocumentImg(
          countId,
          lan,
          documentType,
          topicId
        );
        // console.log(response)
        // const file = new Blob([response.data], { type: 'image/jpeg' });

        // const fileURL = URL.createObjectURL(file);
        setImageSrc(response.data.msg.img);

        //生成时间在这里更新
        setGenerationTime(response.data.msg.generationTime);
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    };

    fetchImage();
  }, [countId, documentType, lan, topicId]);

  const handleDownloadClick = async () => {
    // let { countId, language } = coverLetterData;

    // console.log(countId);
    // console.log(language);
    //add generate & regenerate button

    try {
      const response = await downloadDocumentPdf(
        countId,
        lan,
        documentType,
        topicId
      );
      if (response.status === 200) {
        showAlertMessage(
          'Success',
          'The Document sent successfully!',
          'success'
        );
      }
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `Molly_${documentType}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error fetching PDF: ', error);
    }
  };

  const handleBackClick = () => {
    //这里用window.open是为了不在一个标签页进行跳转,0519跟@🇩🇪Viviane 聊的方案 保留之前的下载页 便于用户回溯
    window.open(`/#/layout/${documentType}/generate`, '_blank');
    // navigate(`/layout/${documentType}/generate`)
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.previewContainer}>
        {/* 替换实际的src */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="preview img"
            className={styles.showImage}
          ></img>
        )}
        {/* mock img */}
        {/* <img
          src={MockImage}
          alt="preview img"
          className={styles.showImage}
        ></img> */}
      </div>
      <div className={styles.operationContainer}>
        <MidTitleComp>{downloadTexts.documentGenerated}</MidTitleComp>

        {/* 如果有邮箱会发邮箱，没有邮箱暂时隐藏了 */}
        {rememberEmail && (
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
        <SecParagraphComp>
          {downloadTexts.contactEmail}: viviane.huang@stu-de.org
        </SecParagraphComp>

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
