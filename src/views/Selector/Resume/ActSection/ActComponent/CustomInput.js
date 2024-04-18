import React from 'react';
import { Input } from 'antd';
import styles from '../ActSection.module.css';

const { TextArea } = Input;

const CustomInput = ({
  labelIndex,
  label,
  value,
  onChange,
  onBlur,
  inputRef,
  onKeyDown,
  type,
}) => {
  let InputComp;

  switch (type) {
    case 'workSummary':
    case 'workDetail':
      InputComp = (
        <div>
          <TextArea
            placeholder={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={inputRef}
            onKeyDown={onKeyDown}
            autoSize={{ minRows: 5, maxRows: 15 }}
          />
          {/* <Button>AI</Button> */}
        </div>
      );
      break;
    default:
      InputComp = (
        <Input
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />
      );
  }

  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      {InputComp}
    </div>
  );
};

export default CustomInput;
