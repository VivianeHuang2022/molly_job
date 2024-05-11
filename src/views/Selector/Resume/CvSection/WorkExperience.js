import {
  Paragraph,
  SubHeading,
  Heading,
  HorizontalLayout,
  ParagraphList,
} from './cvComps/CvTypography';
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
    groupName,
  } = experience;

  return (
    <div className={styles.subSection}>
      <HorizontalLayout styles={styles}>
        <SubHeading text={`${company} `} styles={styles} />
        <Paragraph text={`${city} ${state} ${country}`} styles={styles} />
      </HorizontalLayout>

      <HorizontalLayout styles={styles}>
        <Paragraph text={`${groupName} ${role}`} styles={styles} />
        <Paragraph text={`${startDate} - ${endDate}`} styles={styles} />
      </HorizontalLayout>

      <Paragraph text={workSummary} styles={styles} />
      <ParagraphList text={workDetail} styles={styles} />
    </div>
  );
};

const WorkExperience = ({ cvData, sectionName, styles }) => {
  const workExperience = cvData;
  const { cvSection } = styles;

  return (
    <main>
      <Heading text={sectionName} styles={styles} />

      <div className={cvSection}>
        {workExperience.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            styles={styles}
          />
        ))}
      </div>
    </main>
  );
};

export default WorkExperience;
