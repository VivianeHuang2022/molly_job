import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { PrimaryButton, DefaultButton } from '../../../components/Button';
import CvSection from './CvSection';
import { createResume } from '../../../utils/api';

import { NoticeParagraphComp } from '../../../components/Typography';
import { saveLocalEdit } from '../../../utils/saveLocalData';

// ResumeContainer Component
const CvContainer = ({
  labels,
  singleCvData,
  currentSectionType,
  matchDataToBack,
  styles,
}) => {
  const [isSaved, setIsSaved] = useState(true);
  const contentRef = useRef(null);
  const downloadPDF = () => {
    // 使用 ref 获取 DOM 元素
    const element = contentRef.current;

    // 设置 html2pdf.js 的配置选项
    const opt = {
      margin: 1,
      filename: 'myfile.pdf',
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      // 其他可能需要的配置项，例如页眉页脚等
    };

    // 调用 html2pdf.js 的方法生成 PDF
    html2pdf().set(opt).from(element).save();
  };

  const handleSaveToBackend = async () => {
    const dataGroup = matchDataToBack(singleCvData);
    console.log(dataGroup)
    const topicId = localStorage.getItem('topicId');
    try {
      const response = createResume(dataGroup, topicId);
      if (response.status === 200) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
        saveLocalEdit('resume', topicId, {
          cvSections: singleCvData,
          currentSectionType,
        });
      }
    } catch (error) {
      setIsSaved(false);
      saveLocalEdit('resume', topicId, {
        cvSections: singleCvData,
        currentSectionType,
      });
      console.log(error);
    }
  };
  const handleDownloadButton = () => {
    //先同步数据给后端,成功后再下载
    handleSaveToBackend();

    //可能会需要把pdf发送给后端再发送给用户邮箱
    downloadPDF();
  };
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeShow}>
        <div className={styles.resume} ref={contentRef}>
          <CvSection
            labels={labels}
            singleCvData={singleCvData}
            currentSectionType={currentSectionType}
          />
        </div>
      </div>
      <div className={styles.saveButtonContainer}>
        {!isSaved && (
          <NoticeParagraphComp>
            Data is not saved, please try it later.
          </NoticeParagraphComp>
        )}
        <div>
          <DefaultButton
            label={labels.interface.saveButton}
            onClick={handleSaveToBackend}
          />
          <PrimaryButton
            label={labels.interface.downloadButton}
            onClick={handleDownloadButton}
          />
        </div>
      </div>
    </div>
  );
};

export default CvContainer;
