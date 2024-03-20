import React, { useState } from 'react';
import { Select } from 'antd';
import PreviewImage from './PreviewImage';
import styles from './CoverLetter.module.css';
import Generator from './Generator';
import { getLabels } from '../../local';
const GenerateCoverLetterPage = () => {
  const texts = getLabels();
  const generateDocumentTexts = texts.generateDocument;
  const choosLanTexts = generateDocumentTexts.chooseLan;
  const { Option } = Select;
  console.log(texts);

  const uId = 1;
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [countId, setCountId] = useState(1); // 新增 contid 状态

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem('lan', value);
  };

  // 添加用于设置 contid 的回调函数
  const handleContidChange = (newContid) => {
    setCountId(newContid);
    localStorage.setItem('countId', newContid);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.previewContainer}>
        <div>
          <div className={styles.selectedLanguage}>
            <span>{choosLanTexts.title} : </span>
            <Select value={selectedLanguage} onChange={handleLanguageChange}>
              <Option value="english">{choosLanTexts.option.en}</Option>
              <Option value="german">{choosLanTexts.option.de}</Option>
            </Select>
          </div>
          <PreviewImage
            selectedLanguage={selectedLanguage}
            countId={countId}
            onContidChange={handleContidChange}
            chooseTemplateTexts={generateDocumentTexts.chooseTemplate}
          />
        </div>
      </div>
      <div className={styles.operationContainer}>
        <div className={styles.operationButtonsContainer}>
          <Generator
            uId={uId}
            countId={countId}
            lan={selectedLanguage}
            generateDocumentTexts={generateDocumentTexts}
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateCoverLetterPage;
