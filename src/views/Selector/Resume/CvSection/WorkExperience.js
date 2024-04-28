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
      <HorizontalLayout>
        <SubHeading text={`${company} `} />
        <Paragraph text={`${city} ${state} ${country}`} />
      </HorizontalLayout>

      <HorizontalLayout>
        <Paragraph text={`${groupName} ${role}`} />
        <Paragraph text={`${startDate} - ${endDate}`} />
      </HorizontalLayout>

      <Paragraph text={workSummary} />
      <ParagraphList text={workDetail} />
    </div>
  );
};

const WorkExperience = ({ cvData, sectionName, styles }) => {
  const workExperience = cvData;
  const { cvSection } = styles;

  return (
    <main>
      <Heading text={sectionName} />

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
