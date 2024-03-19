import React, { useRef, useEffect } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { updateField} from '../../../../redux/cvDataSlice';


// 输入框组件
const PersonalInfoInput = ({
  label,
  value,
  onChange,
  onBlur,
  onKeyDown,
  inputRef,
}) => (
  <div>
    <p>{label}</p>
    <Input
      placeholder={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
      onKeyDown={onKeyDown}
    />
  </div>
);

// PersonalInfoPage 组件
const PersonalInfoPage = ({ cvData, labels, styles }) => {
  const { sectionName, ...otherLabels } = labels;
  const allLabelKeys = Object.keys(otherLabels);
  const sectionKey = 'personalInfo';
  const dispatch = useDispatch();

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const updateFieldFunc = (title, newValue) => {
    dispatch(
      updateField({
        sectionName: sectionKey,
        title: title,
        newValue: newValue,
      })
    );
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const title = allLabelKeys[index];
      const newValue = event.target.value;
      const nextIndex = (index + 1) % allLabelKeys.length;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
      updateFieldFunc(title, newValue);
    }
  };

  return (
    <div>
      <h1>{sectionName}</h1>
      <div className={styles.inputGroupContainer}>
        {allLabelKeys.map((title, index) => (
          <PersonalInfoInput
            key={index}
            label={labels[title]}
            value={cvData['personalInfo'][title]}
            onChange={(e) => updateFieldFunc(title, e.target.value)}
            onBlur={() => updateFieldFunc(title, cvData['personalInfo'][title])}
            inputRef={(el) => (inputRefs.current[index] = el)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};


export default PersonalInfoPage;
