import React from 'react';
import { Button } from 'antd';
import styles from './Comps.module.css';
import { PlusOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const PrimaryButton = ({ onClick, label, htmlType }) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={styles.primaryButton}
      shape="round"
      htmlType={htmlType}
    >
      {label}
    </Button>
  );
};

export const LoadingButton = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={styles.primaryButton}
      shape="round"
      loading
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

export const AddMore = ({ label, onClick }) => {
  return (
    <div>
      <Button type="text" onClick={onClick}>
        <PlusOutlined className={styles.icon} />
        <span className={styles.addMore}> {label}</span>
      </Button>
    </div>
  );
};

export const EditButton = ({ label, onClick }) => {
  return (
    <div>
      <Button type="text" className={styles.icon} onClick={onClick}>
        <EditOutlined />
      </Button>
    </div>
  );
};

export const DeleteButton = ({ label, onClick }) => {
  return (
    <div>
      <Button type="text" className={styles.icon} onClick={onClick}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};
