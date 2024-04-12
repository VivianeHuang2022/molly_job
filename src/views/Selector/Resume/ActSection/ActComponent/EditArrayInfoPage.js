import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateField } from '../../../../../redux/slices/cvDataSlice';
import CustomInput from './CustomInput';
import CollapsePanel from '../../../../../components/CollapsePanel';

const EditArrayInfoPage = ({
  sectionName,
  otherLabels,
  labels,
  item,
  styles,
  sectionKey,
  isShowSubTitle,
}) => {
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const allLabelKeys = Object.keys(otherLabels);

  //页面加载后,需要激活的输入位置
  // useEffect(() => {
  //   if (inputRefs.current[0]) {
  //     inputRefs.current[0].focus();
  //   }
  // }, []);

  const updateFieldFunc = (id, title, newValue) => {
    dispatch(
      updateField({
        sectionKey: sectionKey,
        id: id,
        title: title,
        newValue: newValue,
      })
    );
  };

  const handleKeyDown = (event, id, index) => {
    if (event.key === 'Enter') {
      // Update the field value when Enter key is pressed
      event.preventDefault(); // Prevent default behavior of enter key
      const title = allLabelKeys[index];
      const newValue = event.target.value;

      // Move focus to the next input field
      if (index + 1 < allLabelKeys.length) {
        setTimeout(() => {
          if (inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
          }
        }, 0); // Delay focus movement operation
      } else {
        // If it's the last input field
        inputRefs.current[index].blur();
      }

      updateFieldFunc(id, title, newValue);
    }
  };
  const { gridItems, unGridItems } = allLabelKeys.reduce(
    (acc, title) => {
      if (title === 'workSummary' || title === 'workDetail') {
        acc.unGridItems.push(title);
      } else {
        acc.gridItems.push(title);
      }
      return acc;
    },
    { gridItems: [], unGridItems: [] }
  );

  const PanelContent = (
    <div>
      {/* {isShowSubTitle ? (
        <h3 className={styles.sectionGroupTitle}>
          {sectionName} {item.id}
        </h3>
      ) : null} */}
      <div className={styles.sectionGroupContent}>
        <div className={styles.inputGridContainer}>
          {gridItems.map((title, labelIndex) => (
            <CustomInput
              key={labelIndex}
              label={labels[title]}
              placeholder={labels[title]}
              value={item[title]}
              onChange={(e) => updateFieldFunc(item.id, title, e.target.value)}
              onBlur={() => updateFieldFunc(item.id, title, item[title])}
              inputRef={(el) => (inputRefs.current[labelIndex] = el)}
              onKeyDown={(e) => handleKeyDown(e, item.id, labelIndex)}
              type={title}
            />
          ))}
        </div>

        {/* Summary & Detail*/}
        <div>
          {unGridItems.map((title, labelIndex) => (
            <CustomInput
              key={labelIndex}
              label={labels[title]}
              placeholder={labels[title]}
              value={item[title]}
              onChange={(e) => updateFieldFunc(item.id, title, e.target.value)}
              onBlur={() => updateFieldFunc(item.id, title, item[title])}
              inputRef={(el) =>
                (inputRefs.current[labelIndex + gridItems.length] = el)
              }
              onKeyDown={(e) =>
                handleKeyDown(e, item.id, labelIndex + gridItems.length)
              }
              type={title}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.collapsePanel}>
      <CollapsePanel
        sectionName={` ${sectionName} ${item.id}`}
        PanelContent={PanelContent}
        sectionKey={sectionKey}
        itemId={item.id}
      />
    </div>
  );
};

export default EditArrayInfoPage;
