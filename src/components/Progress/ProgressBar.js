// ProgressBar.js
import React from 'react';
import CircleNumber from './CircleNumber';
import styles from './ProgressStyle.module.css';

const ProgressBar = () => {
  // 假设你根据某些逻辑决定使用哪种样式
  const useDarkStyle = true; // 这个值可以根据你的逻辑变化

  const circleNumbers = Array.from({ length: 5 }, (_, index) => {
    const styleType = useDarkStyle ? 'dark' : 'light';
    return (
      <CircleNumber
        key={index}
        number={index + 1}
        index={index}
        styleType={styleType}
      />
    );
  });

  return (
    <div className={styles.container}>
      {circleNumbers}
      {/* 这里添加你的其他组件或SVG进度条代码 */}
    </div>
  );
};

export default ProgressBar;
