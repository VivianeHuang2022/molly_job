import React from 'react';
import SectionPageArray from './SectionPageArray'; // 导入处理数组类型数据的模板组件
import SectionPageSingle from './SectionPageSingle'; // 导入处理非数组类型数据的模板组件
import styles from './ActSection.module.css';

const ActSection = ({ labels, singleCvData, currentSectionType }) => {
  const cvData = singleCvData;

  return (
    <div className={styles.actSectionContainer}>
      {currentSectionType.map((sectionType) => {
        if (
          sectionType === 'personalInfo' ||
          sectionType === 'skillsActivitiesInterests'
        ) {
          return (
            <SectionPageSingle
              key={sectionType}
              cvData={cvData[sectionType]}
              labels={labels[sectionType]}
              styles={styles}
              sectionKey={sectionType}
            />
          );
        } else {
          return (
            <SectionPageArray
              key={sectionType}
              cvData={cvData[sectionType]}
              labels={labels[sectionType]}
              styles={styles}
              sectionKey={sectionType}
            />
          );
        }
      })}
    </div>
  );
};

export default ActSection;
