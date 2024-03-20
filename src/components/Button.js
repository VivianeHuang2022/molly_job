import React from 'react';
import { Button } from 'antd';
import styles from './Comps.module.css';

export const PrimaryButton = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={styles.primaryButton}
      shape="round"
    >
      {label}
    </Button>
  );
};

export const DefaultButton = ({ onClick, label }) => {
  return (
    <Button onClick={onClick} className={styles.button} shape="round">
      {label}
    </Button>
  );
};
