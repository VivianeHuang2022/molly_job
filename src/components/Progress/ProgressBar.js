// ProgressBar.js
import React from 'react';
import CircleNumber from './CircleNumber';
import styles from './ProgressStyle.module.css';

// 定义进度条的数据
const steps = [
  { number: 1, title: 'DREAM' },
  { number: 2, title: 'REASON' },
  { number: 3, title: 'BACKGROUND' },
  { number: 4, title: 'INTERESTS' },
  { number: 5, title: 'PERSONAL' },
];

const ProgressBar = ({ currentNum }) => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <CircleNumber
          key={index}
          number={step.number}
          index={step.number}
          currentNum={currentNum + 1}
          title={step.title}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
