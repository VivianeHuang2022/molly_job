import React, { useState, useEffect } from 'react';
import PreviewImage from './Generate/PreviewImage';
import styles from './GenerateTemplate.module.css';
import Generator from './Generate/Generator';

import { getLabels } from '../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';

import { LoadingIndicator } from '../../components/Loading';

import LanguageSwitcher from './Generate/LanguageSwitcher';

const GenerateTemplate = ({ fetchImages, documentType }) => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const { generateDocument: generateDocumentTexts } = texts;
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(true); // 图片加载状态

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('generateLan') || 'english'
  );
  console.log(localStorage.getItem('generateLan'), documentType);
  const [countId, setCountId] = useState(
    Number(localStorage.getItem(`countId_${documentType}`)) || 0
  ); // 缓存存储的countId是string类型,不转换为数字会变成字符串拼接

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem('generateLan', value);
    console.log(selectedLanguage);
  };

  // 添加用于设置 contid 的回调函数
  const handleContidChange = (newContid) => {
    console.log(newContid + 1);
    setCountId(newContid + 1); // 设置标志，表示countId已改变
    localStorage.setItem(`countId_${documentType}`, newContid);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const images = fetchImages(selectedLanguage);
  //   setImageFiles(images);
  //   setLoading(false);
  // }, [selectedLanguage, fetchImages]);

  useEffect(() => {
    setLoading(true);
    const images = fetchImages(selectedLanguage);
    setImageFiles(images);
    setLoading(false);
    localStorage.setItem(
      'generateLan',
      localStorage.getItem('generateLan') || 'english'
    );
  }, [selectedLanguage]);

  console.log(localStorage.getItem(`countId_${documentType}`));
  return (
    <div className={styles.pageContainer}>
      <div className={styles.previewContainer}>
        <LanguageSwitcher
          onLanguageChange={handleLanguageChange}
          generateDocumentTexts={generateDocumentTexts}
          generateLan={selectedLanguage}
        />

        <LoadingIndicator isLoading={loading} />

        <PreviewImage
          onContidChange={handleContidChange}
          chooseTemplateTexts={generateDocumentTexts.chooseTemplate}
          imageFiles={imageFiles}
          countId={countId}
        />
      </div>

      <div className={styles.operationContainer}>
        <Generator
          countId={countId}
          lan={selectedLanguage}
          generateDocumentTexts={generateDocumentTexts}
          documentType={documentType}
        />
      </div>
    </div>
  );
};

export default GenerateTemplate;
