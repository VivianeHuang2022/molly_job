import React from 'react';
import { useSelector } from 'react-redux'; // 导入 useSelector 钩子
import styles from './resume.module.css';
import { Button } from 'antd';
import ActSection from './ActSection';
import CvSection from './CvSection';
import { getLabels } from './local'; // 导入语言配置文件加载函数

// ActionContainer Component
const ActionContainer = ({ labels }) => {
  return (
    <div className={styles.actionContainer}>
      <div className={styles.actionContent}>
        <ActSection labels={labels} />
      </div>
    </div>
  );
};

// ResumeContainer Component
const CvContainer = ({ labels }) => {
  const printResumePDF = () => {
    window.print();
  };
  window.addEventListener('afterprint', (event) => {
    console.log('After print');
  });

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeShow}>
        <div className={styles.resume}>
          <CvSection labels={labels} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button type="primary" onClick={printResumePDF}>
          打印 PDF
        </Button>
      </div>
    </div>
  );
};

// CvPage Component
const CvPage = () => {
  // 使用 useSelector 钩子选择 Redux store 中的当前语言设置
  const currentLanguage = useSelector((state) => state.cvData.language);
  // console.log(currentLanguage);
  // 根据当前语言设置获取对应的语言配置文件
  const labels = getLabels(currentLanguage);

  return (
    <div className={styles.container}>
      {/* 将获取到的语言配置文件传递给子组件 */}
      <ActionContainer labels={labels} />
      <CvContainer labels={labels} />
    </div>
  );
};

export default CvPage;
