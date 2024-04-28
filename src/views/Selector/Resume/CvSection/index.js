import React from 'react';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import ResearchExperience from './ResearchExperience';
import PublicationsPresentations from './PublicationsPresentations';
import SkillsActivitiesInterests from './SkillsActivitiesInterests';
import stylesArray from './styles';

import { getComponentMap } from '../componentMap';

const componentMap = getComponentMap(
  PersonalInfo,
  EducationInfo,
  WorkExperience,
  ProjectExperience,
  ResearchExperience,
  PublicationsPresentations,
  SkillsActivitiesInterests
);

const CvSectionPage = ({ labels, singleCvData, currentSectionType }) => {
  // 从stylesArray中获取样式对象，这里假设只有一个样式对象
  const styles = stylesArray[0];

  // 获取简历数据，这里假设singleCvData是一个包含所有简历部分的对象
  const cvData = singleCvData;
  const { paragraph: paragraphStyle, SubHeading: subHeadingStyle } = styles;

  // 根据currentSectionType数组动态渲染对应的子组件
  return (
    <div className={styles.cvContainer}>
      {currentSectionType.map((sectionType) => {
        // 根据sectionType从componentMap中获取对应的组件
        const Component = componentMap[sectionType];
        if (Component) {
          // 根据每个部分的数据结构，提取相应的数据和sectionName
          const data = cvData[sectionType].data;
          const sectionName = cvData[sectionType].sectionName;
          return (
            <Component
              key={sectionType}
              cvData={data}
              sectionName={sectionName}
              title={labels[sectionType]}
              styles={styles}
              paragraphStyle={paragraphStyle}
              subHeadingStyle={subHeadingStyle}
            />
          );
        } else {
          console.warn(`Component for section type ${sectionType} not found.`);
          return null;
        }
      })}{' '}
    </div>
  );
};
export default CvSectionPage;
