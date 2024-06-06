// CircleNumber.js
import React from 'react';
import styles from './CircleNumber.module.css';

const CircleNumber = ({ number, index, styleType = 'light' }) => {
  // 根据styleType添加相应的类
  const circleClass =
    styleType === 'dark'
      ? styles.circle + ' ' + styles.dark
      : styles.circle + ' ' + styles.light;

  return (
    <div
      className={styles.circleContainer}
      style={{
        left: `${index * 72}px`,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <div className={circleClass}>{number}</div>
    </div>
  );
};

export default CircleNumber;
