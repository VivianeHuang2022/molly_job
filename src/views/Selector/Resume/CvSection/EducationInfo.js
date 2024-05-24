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
      endDate,
      currentGPA,
      achievement,
      currentCourses,
    } = edu;
    return (
      <div className={styles.subSection}>
        <HorizontalLayout styles={styles}>
          <SubHeadingArray
            text={[currentDegree, currentUni, city, currentCountry]}
            styles={styles}
          />
          <Paragraph text={`${startDate} - ${endDate}`} styles={styles} />
        </HorizontalLayout>

        <div className={styles.lockIn}>
          <HorizontalLayout styles={styles}>
            <Paragraph text={` ${currentMajor}`} styles={styles} />
            <Paragraph text={` ${state}`} styles={styles} />
          </HorizontalLayout>

          <HorizontalLayout styles={styles}>
            <Paragraph text={achievement} styles={styles} />
            <Paragraph text={` ${currentGPA}`} styles={styles} />
          </HorizontalLayout>

          <Paragraph text={currentCourses} styles={styles} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Heading text={sectionName} styles={styles} />
      <div className={cvSection}>
        {educationInfo.map((edu) => (
          <EducationInfoItem key={edu.id} edu={edu} styles={styles} />
        ))}
      </div>
    </div>
  );
};

export default EducationInfo;
