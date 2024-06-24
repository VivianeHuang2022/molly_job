// ProgressBar.js
import React from 'react';
import CircleNumber from './CircleNumber';
import styles from './ProgressStyle.module.css';
import { getLabels } from '../../views/local'; // 导入语言配置文件加载函数
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { useSelector } from 'react-redux';

const ProgressBar = ({ currentNum, onProgressChange, topicId }) => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  // 定义不同topicId对应的steps数据
  const topicStepsMap = {
    1: [
      { number: 1, title: texts.GeberalQ.StdPage.Processbar.DREAM },
      { number: 2, title: texts.GeberalQ.StdPage.Processbar.REASON },
      { number: 3, title: texts.GeberalQ.StdPage.Processbar.BACKGROUND },
      { number: 4, title: texts.GeberalQ.StdPage.Processbar.INTERESTS },
      { number: 5, title: texts.GeberalQ.StdPage.Processbar.PERSONAL },
    ],
    2: [
      { number: 1, title: texts.GeberalQ.StdPage.Processbar.PERSONAL },
      { number: 2, title: texts.GeberalQ.StdPage.Processbar.JOB },
      { number: 3, title: texts.GeberalQ.StdPage.Processbar.SKILLS },
      { number: 4, title: texts.GeberalQ.StdPage.Processbar.ACHIEVEMENT },
      { number: 5, title: texts.GeberalQ.StdPage.Processbar.EXPERIENCE },
    ],
  };

  const steps = topicStepsMap[topicId] || [];
  const updateProgress = (newProgress) => {
    onProgressChange(newProgress);
  };
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.singleContainer}>
          <CircleNumber
            key={index}
            number={step.number}
            index={step.number}
            currentNum={currentNum}
            title={step.title}
            steps={steps}
            onProgressChange={updateProgress} // 传递更新进度的回调函数
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
