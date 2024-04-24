import { Heading, Paragraph, SubHeading } from './cvComps/CvTypography';

const ResearchExperience = ({ cvData, sectionName, styles }) => {
  const researchExperience = cvData;

  const { cvSection } = styles;

  const ResearchExperienceItem = ({ research }) => {
    const {
      researchTitle,
      schoolName,
      city,
      state,
      country,
      startDate,
      endDate,
      researchSummary,
      researchDetail,
    } = research;

    return (
      <div className={styles.subSection}>
        <SubHeading text={researchTitle} styles={styles} />
        <Paragraph text={schoolName} />
        <Paragraph text={`${city} ${state} ${country}`} />
        <Paragraph text={`${startDate} - ${endDate}`} />
        <Paragraph text={researchSummary} styles={styles} />
        <Paragraph text={researchDetail} />
      </div>
    );
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {researchExperience.map((research, index) => (
        <ResearchExperienceItem
          key={index}
          research={research}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default ResearchExperience;
