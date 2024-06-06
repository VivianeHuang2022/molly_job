// CircleNumber.js
import React from 'react';
import styles from './CircleNumber.module.css';

const CircleNumber = ({ number, index, currentNum, title }) => {
  let circleClass;
  // 根据styleType添加相应的类
  if (currentNum === number) {
    circleClass = styles.circle + ' ' + styles.currentChoose;
  } else {
    circleClass =
      number < currentNum
        ? styles.circle + ' ' + styles.dark
        : styles.circle + ' ' + styles.light;
  }

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
      <div className={styles.title}> {title}</div>
    </div>
  );
};

export default CircleNumber;
