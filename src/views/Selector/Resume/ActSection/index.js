import PersonalInfo from './PersonalInfo';
import styles from './ActSection.module.css';
import { useSelector } from 'react-redux';
import { selectCvData } from '../../../../redux/cvDataSlice';

const ActSection = ({ labels }) => {
  const cvData = useSelector(selectCvData);
  return (
    <div className={styles.actSectionContainer}>
      <PersonalInfo
        cvData={cvData}
        labels={labels.personalInfo}
        styles={styles}
      />
    </div>
  );
};

export default ActSection;
