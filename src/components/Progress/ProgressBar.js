// ProgressBar.js
import React from 'react';
import CircleNumber from './CircleNumber';
import styles from './ProgressStyle.module.css';

// 定义不同topicId对应的steps数据
const topicStepsMap = {
  1: [
    { number: 1, title: 'DREAM' },
    { number: 2, title: 'REASON' },
    { number: 3, title: 'BACKGROUND' },
    { number: 4, title: 'INTERESTS' },
    { number: 5, title: 'PERSONAL' },
  ],
  2: [
    { number: 1, title: 'PERSONAL' },
    { number: 2, title: 'JOB' },
    { number: 3, title: 'SKILLS' },
    { number: 4, title: 'ACHIEVEMENT' },
    { number: 5, title: 'EXPERIENCE' },
  ],
};

const ProgressBar = ({ currentNum, onProgressChange, topicId }) => {
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
