import { Heading, Paragraph, SubHeading } from './cvComps/CvTypography';

const EducationInfo = ({ cvData, sectionName, styles }) => {
  const educationInfo = cvData;

  const { cvSection } = styles;

  const EducationInfoItem = ({ edu }) => {
    return (
      <div className={styles.subSection}>
        <Paragraph text={edu.currentCountry} />

        <SubHeading text={`${edu.currentDegree}  ${edu.currentMajor}`} />
        <Paragraph text={`${edu.currentUni} ${edu.city} ${edu.state}`} />
        <Paragraph text={edu.graduationDate} />
        <Paragraph text={edu.currentGPA} />
        <Paragraph text={edu.achievement} />
        <Paragraph text={edu.currentCourses} />
      </div>
    );
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {educationInfo.map((edu) => (
        <EducationInfoItem key={edu.id} edu={edu} styles={styles} />
      ))}
    </div>
  );
};

export default EducationInfo;
