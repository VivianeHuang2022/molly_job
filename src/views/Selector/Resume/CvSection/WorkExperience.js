import { Paragraph, SubHeading,Heading } from './cvComps/CvTypography';
const WorkExperienceItem = ({
  experience,
  styles,
  paragraphStyle,
  subHeadingStyle,
}) => {
  const {
    role,
    company,
    city,
    state,
    country,
    startDate,
    endDate,
    workSummary,
    workDetail,
    groupName,
  } = experience;

  return (
    <div className={styles.subSection}>
      <SubHeading text={role} />
      <Paragraph text={company} />
      <Paragraph text={groupName} />
      <Paragraph text={`${city} ${state} ${country}`} />
      <Paragraph text={`${startDate} - ${endDate}`} />
      <Paragraph text={workSummary} />
      <Paragraph text={workDetail} />
    </div>
  );
};

const WorkExperience = ({
  cvData,
  sectionName,
  styles,
  paragraphStyle,
  subHeadingStyle,
}) => {
  const workExperience = cvData;
  const { cvSection } = styles;



  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {workExperience.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          experience={experience}
          styles={styles}
          paragraphStyle={paragraphStyle}
          subHeadingStyle={subHeadingStyle}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
