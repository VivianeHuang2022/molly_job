import React from 'react';

const ResearchExperience = ({ cvData, sectionName, styles }) => {
  const researchExperience = cvData;

  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  const SubHeading = ({ text }) => {
    return <div className={styles.SubHeading}>{text}</div>;
  };

  const Paragraph = ({ content, title }) => {
    return (
      <div className={styles.paragraph}>
        {title && <strong>{title}: </strong>}
        {content}
      </div>
    );
  };

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
        <Paragraph content={schoolName} />
        <Paragraph content={`${city} ${state} ${country}`} />
        <Paragraph content={`${startDate} - ${endDate}`} />
        <Paragraph content={researchSummary} styles={styles} />
        <Paragraph content={researchDetail} />
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
