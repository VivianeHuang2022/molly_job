import { Heading, Paragraph, SubHeading } from './cvComps/CvTypography';

const EducationInfo = ({ cvData, sectionName, styles }) => {
  const educationInfo = cvData;

  const { cvSection } = styles;

  const EducationInfoItem = ({ edu }) => {
    const {
      currentCountry,
      currentDegree,
      currentMajor,
      currentUni,
      city,
      state,
      startDate,
      graduationDate,
      currentGPA,
      achievement,
      currentCourses,
    } = edu;
    return (
      <div className={styles.subSection}>
        <Paragraph text={currentCountry} />
        <SubHeading text={`${currentDegree} ${currentMajor}`} />
        <Paragraph text={`${currentUni} ${city} ${state}`} />
        <Paragraph text={startDate} />
        <Paragraph text={graduationDate} />
        <Paragraph text={currentGPA} />
        <Paragraph text={achievement} />
        <Paragraph text={currentCourses} />
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
