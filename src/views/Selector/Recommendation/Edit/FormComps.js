import React, { useRef, useEffect } from 'react';
import styles from './Recommendation.module.css';
import { useField, useFormikContext } from 'formik';
import { Input } from 'antd';
import { saveLocalEdit } from '../../../../utils/saveLocalData';

const { TextArea } = Input;

export const FormGroup = ({ formGroup, title, registerRef, handleKeyDown }) => {
  const fields = Object.keys(formGroup).map((key) => {
    const item = formGroup[key];
    return (
      <div key={key} id={key} className={styles.formContainer}>
        <SingleField
          {...item}
          registerRef={registerRef}
          handleKeyDown={handleKeyDown}
        />
      </div>
    );
  });
  return (
    <div>
      <Section title={title} />
      <div className={styles.groupGridInfo}>{fields}</div>
    </div>
  );
};

export const FormSingle = ({
  instruction,
  form,
  title,
  sectionTitle,
  registerRef,
  handleKeyDown,
}) => {
  return (
    <div>
      <Section title={title} />
      {instruction && <StarInstructions sectionTitle={sectionTitle} />}
      <SingleField
        {...form}
        registerRef={registerRef}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

export const SingleField = ({
  registerRef,
  handleKeyDown,
  label,
  component,
  schema,
  ...props
}) => {
  // 使用useField来获取当前字段的值和元数据
  const [field, meta] = useField(props);

  // 使用useFormikContext来获取Formik的上下文
  const { values } = useFormikContext();

  // 为当前字段创建一个引用
  const inputRef = useRef(null);

  useEffect(() => {
    registerRef(inputRef);
  }, [registerRef]);

  // 定义 onKeyDown 事件处理函数
  const handleKeyDownSingle = (event) => {
    handleKeyDown(event, inputRef);
  };

  // 定义onBlur事件处理函数
  const handleBlur = () => {
    // 存储表单的值到缓存
    saveLocalEdit('recommendation', values);
  };

  const CustomField =
    component === 'textarea' ? (
      <TextArea
        ref={inputRef}
        onBlur={handleBlur}
        onKeyDown={handleKeyDownSingle}
        {...field}
        {...props}
      />
    ) : (
      <Input
        ref={inputRef}
        onBlur={handleBlur}
        onKeyDown={handleKeyDownSingle}
        {...field}
        {...props}
      />
    );

  return (
    <>
      <div>
        {label}
        {schema && ' * '}
        {CustomField}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

//共用section
export const Section = ({ title }) => (
  <div>
    <h4>{title}</h4>
  </div>
);

//页面组件
export const StarInstructions = ({ sectionTitle }) => {
  return (
    <div className={styles.instructions}>
      <h4>{sectionTitle.starInstructions}</h4>
      <ul>
        <li>{sectionTitle.situation}</li>
        <li>{sectionTitle.task}</li>
        <li>{sectionTitle.action}</li>
        <li>{sectionTitle.result}</li>
      </ul>
    </div>
  );
};
