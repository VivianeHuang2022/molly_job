import React from 'react';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import { selectCvData } from '../../../../redux/cvDataSlice';

import { useSelector } from 'react-redux';

import stylesArray from './styles';

const CvSectionPage = ({ labels }) => {
  const styles = stylesArray[0];
  const cvData = useSelector(selectCvData);

  return (
    <div className={styles.cvSection}>
      <PersonalInfo
        cvData={cvData}
        sectionName={labels.personalInfo.sectionName}
        title={labels.personalInfo}
        styles={styles}
      />
      <EducationInfo
        cvData={cvData}
        sectionName={labels.educationInfo.sectionName}
        styles={styles}
      />
      <WorkExperience
        cvData={cvData}
        sectionName={labels.workExperience.sectionName}
        styles={styles}
      />
      <ProjectExperience
        cvData={cvData}
        sectionName={labels.projectExperience.sectionName}
        styles={styles}
      />
    </div>
  );
};

export default CvSectionPage;
