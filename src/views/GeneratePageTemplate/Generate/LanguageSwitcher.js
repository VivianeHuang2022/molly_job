import React, { useState } from 'react';
import { Select } from 'antd';
import styles from './generate.module.css';

const LanguageSwitcher = ({
  onLanguageChange,
  generateDocumentTexts,
  generateLan,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(generateLan);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem('generateLan', value);
    onLanguageChange(value); // 通知父组件语言变化
  };

  const Label = ({ text }) => <span>{text}</span>;

  const choosLanTexts = generateDocumentTexts.chooseLan;
  const options = [
    { value: 'english', text: choosLanTexts.option.en },
    { value: 'german', text: choosLanTexts.option.de },
  ];

  return (
    <div className={styles.selectedLanguage}>
      <Label text={choosLanTexts.title} />
      <Select value={selectedLanguage} onChange={handleLanguageChange}>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.text}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
