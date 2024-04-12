import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateField } from '../../../../../redux/slices/cvDataSlice';
import CustomInput from './CustomInput';
import SectionName from './SectionName';

const EditSectionPage = ({
  sectionName,
  otherLabels,
  labels,
  data,
  styles,
  sectionKey,
}) => {
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const allLabelKeys = Object.keys(otherLabels);

  // useEffect(() => {
  //   if (inputRefs.current[0]) {
  //     inputRefs.current[0].focus();
  //   }
  // }, []);

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
      // Update the field value when Enter key is pressed
      event.preventDefault(); // Prevent default behavior of enter key
      const title = allLabelKeys[index];
      const newValue = event.target.value;

      // Move focus to the next input field
      if (index + 1 < allLabelKeys.length) {
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0); // Delay focus movement operation
      } else {
        // If it's the last input field
        inputRefs.current[index].blur();
      }

      updateFieldFunc(title, newValue);
    }
  };

  return (
    <div>
      <SectionName sectionName={sectionName} sectionKey={sectionKey} />
      <div className={styles.sectionGroupContent}>
        <div className={styles.inputGridContainer}>
          {Object.keys(otherLabels).map((title, index) => (
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
      </div>
    </div>
  );
};

export default EditSectionPage;
