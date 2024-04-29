import {
  Heading,
  Paragraph,
  SubHeading,
  HorizontalLayout,
  SubHeadingArray,
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
          <SubHeadingArray
            text={[currentDegree, currentUni, city, currentCountry]}
          />
          <Paragraph text={`${startDate} - ${graduationDate}`} />
        </HorizontalLayout>

        <div className={styles.lockIn}>
          <HorizontalLayout>
            <Paragraph text={` ${currentMajor}`} />
            <Paragraph text={` ${state}`} />
          </HorizontalLayout>

          <HorizontalLayout>
            <Paragraph text={achievement} />
            <Paragraph text={` ${currentGPA}`} />
          </HorizontalLayout>

          <Paragraph text={currentCourses} />
        </div>
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
