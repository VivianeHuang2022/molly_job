import React from 'react';
import EditArrayInfoPage from './ActComponent/EditArrayInfoPage';
import SectionName from './ActComponent/SectionName';
import { AddMore } from '../../../../components/Button';
import { useDispatch } from 'react-redux';
import { addNewExperience } from '../../../../redux/slices/cvDataSlice';

const SectionPage = ({ cvData, labels, styles, sectionKey }) => {
  const { sectionName: labelSecName, ...otherLabels } = labels;
  const sectionName = cvData.sectionName;

  const arrayData = Object.values(cvData.data).filter((item) => item);
  const arrayDataLength = arrayData.length;
  const isShowSubTitle = arrayDataLength > 1;
  const dispatch = useDispatch();

  const handleAddNewExperience = () => {
    dispatch(addNewExperience(sectionKey));
  };
  return (
    <div className={styles.sectionGroup}>
      <SectionName sectionName={sectionName} sectionKey={sectionKey} />

      {arrayData.map((item) => {
        return (
          <EditArrayInfoPage
            key={`${sectionKey}+${item.id}`}
            sectionKey={sectionKey}
            sectionName={sectionName}
            labels={labels}
            otherLabels={otherLabels}
            item={item}
            styles={styles}
            isShowSubTitle={isShowSubTitle}
          />
        );
      })}

      <AddMore label={sectionName} onClick={handleAddNewExperience} />
    </div>
  );
};

export default SectionPage;
