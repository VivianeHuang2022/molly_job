import {
  Heading,
  Paragraph,
  SubHeading,
  HorizontalLayout,
  ParagraphList,
} from './cvComps/CvTypography';

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
        <HorizontalLayout>
          <SubHeading text={`${currentUni} ${state}`} />
          <Paragraph text={`${city} ${currentCountry}`} />
        </HorizontalLayout>

        <HorizontalLayout>
          <Paragraph text={`${currentDegree} ${currentMajor} ${currentGPA}`} />
          <Paragraph text={`${startDate} - ${graduationDate}`} />
        </HorizontalLayout>

        <Paragraph text={currentCourses} />
        <ParagraphList text={achievement} />
      </div>
    );
  };

  return (
    <div>
      <Heading text={sectionName} />
      <div className={cvSection}>
        {educationInfo.map((edu) => (
          <EducationInfoItem key={edu.id} edu={edu} styles={styles} />
        ))}
      </div>
    </div>
  );
};

export default EducationInfo;
