// InputHandler.js
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateField } from '../../../../../redux/slices/cvDataSlice';
import CustomInput from './CustomInput';

const InputHandler = ({
  labels,
  data,
  sectionKey,
  labelKeys,
  styles,
  labelArray,
}) => {
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const updateFieldFunc = (title, newValue) => {
    dispatch(
      updateField({
        sectionKey: sectionKey,
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
        console.log(1);

        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0);
      } else {
        inputRefs.current[index].blur();
      }

      updateFieldFunc(title, newValue);
    }
  };

  return (
    <div className={styles.inputGridContainer}>
      {Object.keys(labelKeys).map((title, index) => (
        <CustomInput
          key={index}
          label={labels[title]}
          value={data[title]}
          onChange={(e) => updateFieldFunc(title, e.target.value)}
          onBlur={() => updateFieldFunc(title, data[title])}
          inputRef={(el) => (inputRefs.current[index] = el)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default InputHandler;
