// ColumnShow.js
import styles from './Column.module.css';
import React from 'react';

export const ColumnShow = ({ content, color }) => {
  const style = color ? { color: color } : {};
  return <span style={style}>{content}</span>;
};

export const CountComp = ({ content, color }) => {
  const style = color ? { color: color } : {};
  return (
    <span className={styles.num} style={style}>
      {content}
    </span>
  );
};
