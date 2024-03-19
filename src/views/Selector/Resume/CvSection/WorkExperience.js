
const WorkExperienceItem = ({ experience, styles }) => {
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
  } = experience;

  const Paragraph = ({ content, title }) => {
    return (
      <div className={styles.paragraph}>
        {title && <strong>{title}: </strong>}
        {content}
      </div>
    );
  };

  const SubHeading = ({ text }) => {
    return <div className={styles.SubHeading}>{text}</div>;
  };

  return (
    <div className={styles.subSection}>
      <SubHeading text={role} styles={styles} />
      <Paragraph content={company} styles={styles} />
      <Paragraph content={`${city}, ${state}, ${country}`} />
      <Paragraph content={`${startDate} - ${endDate}`} />
      <Paragraph content={workSummary} styles={styles} />
      <Paragraph content={workDetail} />
    </div>
  );
};

const WorkExperience = ({ cvData, sectionName, styles }) => {
  const { workExperience } = cvData;
  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {workExperience.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          experience={experience}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
