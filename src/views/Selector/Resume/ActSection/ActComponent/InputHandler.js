// InputHandler.js
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateField,
  selectCurrentSectionType,
  selectCvData,
} from '../../../../../redux/slices/cvDataSlice';
import CustomInput from './CustomInput';
import { saveLocalEdit } from '../../../../../utils/saveLocalData';

const InputHandler = ({
  labels,
  data,
  sectionKey,
  styles,
  labelArray,
  itemId,
}) => {
  const dispatch = useDispatch();
  const singleCvData = useSelector(selectCvData);
  const currentSectionType = useSelector(selectCurrentSectionType);
  const inputRefs = useRef([]);

  const updateFieldFunc = (title, newValue, id) => {
    dispatch(
      updateField({
        sectionKey: sectionKey,
        id: id,
        title: title,
        newValue: newValue,
      })
    );
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const title = labelArray[index];
      const newValue = event.target.value;
      if (index + 1 < labelArray.length) {
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0);
      } else {
        inputRefs.current[index].blur();
      }

      updateFieldFunc(title, newValue);
    }
  };

  const getComponentType = (title) => {
    // 根据labelKey来决定每个 input 的类型
    switch (title) {
      case 'workSummary':
      case 'workDetail':
      case 'projectSummary':
      case 'projectDetail':
      case 'researchSummary':
      case 'researchDetail':
        return 'TextArea'; // 直接返回 title 作为 type，因为它们是唯一的
      default:
        return 'Input'; // 默认类型为 'input'
    }
  };

  const handleOnBlur = (title) => {
    updateFieldFunc(title, data[title], itemId);
    saveLocalEdit('resume', {
      cvSections: singleCvData,
      currentSectionType,
    });
  };

  return (
    <div className={styles.inputGridContainer}>
      {labelArray.map((title, index) => (
        <CustomInput
          key={title} // 使用 title 作为 key，因为它是唯一的
          label={labels[title]}
          value={data[title]}
          onChange={(e) => updateFieldFunc(title, e.target.value, itemId)}
          onBlur={() => handleOnBlur(title)}
          inputRef={(el) => (inputRefs.current[index] = el)}
          onKeyDown={(e) => handleKeyDown(e, index, itemId)}
          type={getComponentType(title)}
        />
      ))}
    </div>
  );
};

export default InputHandler;
