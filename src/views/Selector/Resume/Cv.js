import React, { useRef, useState, useContext } from 'react';
import html2pdf from 'html2pdf.js';
import { PrimaryButton, DefaultButton } from '../../../components/Button';
import CvSection from './CvSection';
import { createResume, downloadResumePDF } from '../../../utils/api';
import AlertContext from '../../../components/AlertProvider/AlertContext';
import { NoticeParagraphComp } from '../../../components/Typography';
import { saveLocalEdit } from '../../../utils/saveLocalData';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentTopicId } from '../../../redux/slices/userTypeSlice';
import { Select } from 'antd';

// ResumeContainer Component
const CvContainer = ({ labels, singleCvData, currentSectionType, styles }) => {
  const topicId = useSelector(selectCurrentTopicId);
  const { showAlertMessage } = useContext(AlertContext);
  const [isSaved, setIsSaved] = useState(true);

  const [selectedStyle, setSelectedStyle] = useState(
    localStorage.getItem('styleNum') || 0
  );
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const downloadPDF = async () => {
    // 使用 ref 获取 DOM 元素
    const element = contentRef.current;

    // 计算元素的宽度和高度
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const scaleFactor = 5 / width;
    //预防文件名重复
    const fileName = 'Molly_Resume_' + getFormattedDateTime() + '.pdf';
    // 设置 html2pdf.js 的配置选项
    const opt = {
      margin: 0.2,
      filename: fileName,
      html2canvas: { scale: 4 },
      jsPDF: {
        unit: 'in',
        format: [width * scaleFactor, height * scaleFactor],
      },
      // 其他可能需要的配置项，例如页眉页脚等
    };

    // 调用 html2pdf.js 的方法生成 PDF

    html2pdf().set(opt).from(element).save();

    const blob = await html2pdf().set(opt).from(element).output('blob');

    // 传到后端
    const formData = new FormData();
    formData.append('file', blob, fileName);
    console.log("response.status")
    // 等待文件上传函数完成
    var response = await downloadResumePDF(formData, topicId);
    console.log(response.status)
    if (response.status === 200) {
      showAlertMessage('Success', 'Resume send successfully!', 'success');
    } else if (response.status === 401) {
      navigate('/login');
    } else {
    }
  };

  function getFormattedDateTime() {
    const now = new Date(); // 获取当前时间

    // 获取日期和时间的各个部分
    const year = now.getFullYear(); // 年
    const month = now.getMonth() + 1; // 月（月份从 0 开始，因此需要加 1）
    const day = now.getDate(); // 日
    const hour = now.getHours(); // 时
    const minute = now.getMinutes(); // 分
    const second = now.getSeconds(); // 秒

    // 将单个数字前补零，例如将 9 转为 09
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    // 格式化为字符串 "YYYY-MM-DD HH:mm:ss"
    return `${year}${formatNumber(month)}${formatNumber(day)}${formatNumber(
      hour
    )}${formatNumber(minute)}${formatNumber(second)}`;
  }

  const handleSaveToBackend = async () => {
    const timeStamp = new Date().getTime();
    const dataGroup = { ...singleCvData, currentSectionType, timeStamp };

    try {
      const response = await createResume(dataGroup, topicId);
      if (response.status === 200) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
        saveLocalEdit('resume', {
          cvSections: singleCvData,
          currentSectionType,
        });
      }
    } catch (error) {
      setIsSaved(false);
      saveLocalEdit('resume', {
        cvSections: singleCvData,
        currentSectionType,
      });
      if(error.response.status===401){
        navigate('/login');
      }
    }
  };
  const handleDownloadButton = () => {
    //先同步数据给后端,成功后再下载
    handleSaveToBackend();

    //可能会需要把pdf发送给后端再发送给用户邮箱
    downloadPDF();
  };
  const handleStyleChange = (value) => {
    setSelectedStyle(value);
    localStorage.setItem('styleNum', value);
  };

  const options = [
    { value: 0, text: 'style 1' },
    { value: 1, text: 'style 2' },
  ];

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeShow}>
        <div className={styles.resume} ref={contentRef}>
          <CvSection
            labels={labels}
            singleCvData={singleCvData}
            currentSectionType={currentSectionType}
            styleNum={selectedStyle}
          />
        </div>
      </div>

      <div className={styles.saveButtonContainer}>
        {!isSaved && (
          <NoticeParagraphComp>
            Data is not saved, please try it later.
          </NoticeParagraphComp>
        )}

        {isSaved && (
          <div className={styles.selectStyle}>
            <Select
              value={options[selectedStyle].text}
              onChange={handleStyleChange}
            >
              {options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.text}
                </Select.Option>
              ))}
            </Select>
          </div>
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
