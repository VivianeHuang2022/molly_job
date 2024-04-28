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
        <HorizontalLayout>
          <SubHeading text={researchTitle} styles={styles} />{' '}
          <Paragraph text={`${city} ${state} ${country}`} />
        </HorizontalLayout>

        <HorizontalLayout>
          <Paragraph text={schoolName} />
          <Paragraph text={`${startDate} - ${endDate}`} />
        </HorizontalLayout>

        <Paragraph text={researchSummary} styles={styles} />
        <ParagraphList text={researchDetail} />
      </div>
    );
  };

  return (
    <main>
      <Heading text={sectionName} />
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
