import { useState, useEffect } from 'react';
import { getCoverLetterImg, downloadCoverLetterPdf } from '../../../utils/api';

import styles from './CoverLetter.module.css';
import MockImage from '../../../image/CoverLetterEnglish/Cover_letter_English_1.jpg';
import { PrimaryButton } from '../../../components/Button';
import {
  MidTitleComp,
  ParagraphComp,
  SecParagraphComp,
} from '../../../components/Typography';

import { getLabels } from '../../local';

const DownloadPage = () => {
  const texts = getLabels();
  const downloadTexts = texts.download;
  const rememberEmail = localStorage.getItem('email');

  const [imageSrc, setImageSrc] = useState(null);
  const [generationTime, setGenerationTime] = useState('暂未获取到时间');
  const [coverLetterData, setCoverLetterData] = useState({});
  const uId = localStorage.getItem('uId');
  const countId = localStorage.getItem('countId');
  const lan = localStorage.getItem('lan');

  useEffect(() => {
    // 在组件加载时获取图片
    const fetchImage = async () => {
      try {
        const response = await getCoverLetterImg(uId, countId, lan);
        const file = new Blob([response.data], { type: 'image/jpeg' });

        const fileURL = URL.createObjectURL(file);
        setImageSrc(fileURL);

        //生成时间在这里更新
        // setGenerationTime(response.data.generationTime);
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    };

    fetchImage();
  }, []);

  const handleDownloadClick = async () => {
    let { countId, language } = coverLetterData;
    const uId = localStorage.getItem('uId');
    //add generate & regenerate button

    try {
      const response = await downloadCoverLetterPdf(uId, countId, language);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'coverletter.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error fetching PDF: ', error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.previewContainer}>
        {/* 替换实际的src */}
         
          <img
            src={imageSrc}
            alt="preview img"
            className={styles.showImage}
          ></img>
        
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
      </div>
    </div>
  );
};

export default DownloadPage;
