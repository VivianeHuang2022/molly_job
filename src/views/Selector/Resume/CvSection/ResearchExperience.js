import {
  Heading,
  Paragraph,
  SubHeading,
  HorizontalLayout,
  ParagraphList,
} from './cvComps/CvTypography';

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
        <HorizontalLayout styles={styles}>
          <SubHeading text={researchTitle} styles={styles} />
          <Paragraph text={`${city} ${state} ${country}`} styles={styles} />
        </HorizontalLayout>

        <HorizontalLayout styles={styles}>
          <Paragraph text={schoolName} styles={styles} />
          <Paragraph text={`${startDate} - ${endDate}`} styles={styles} />
        </HorizontalLayout>

        <Paragraph text={researchSummary} styles={styles} />
        <ParagraphList text={researchDetail} styles={styles} />
      </div>
    );
  };

  return (
    <main>
      <Heading text={sectionName} styles={styles} />
      <div className={cvSection}>
        {researchExperience.map((research, index) => (
          <ResearchExperienceItem
            key={index}
            research={research}
            styles={styles}
          />
        ))}
      </div>
    </main>
  );
};

export default ResearchExperience;
