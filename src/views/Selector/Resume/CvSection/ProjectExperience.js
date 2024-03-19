import React from 'react';

const ProjectExperience = ({ cvData, sectionName, styles }) => {
  const projectExperience = cvData.projectExperience;

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

  const ProjectExperienceItem = ({ project }) => {
    const {
      projectTitle,
      courseName,
      schoolName,
      city,
      state,
      country,
      startDate,
      endDate,
      projectSummary,
      projectDetail,
    } = project;

    return (
      <div className={styles.subSection}>
        <SubHeading text={projectTitle} styles={styles} />
        <Paragraph content={courseName} />
        <Paragraph content={schoolName} />
        <Paragraph content={`${city}, ${state}, ${country}`} />
        <Paragraph content={`${startDate} - ${endDate}`} />
        <Paragraph content={projectSummary} styles={styles} />
        <Paragraph content={projectDetail} />
      </div>
    );
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {projectExperience.map((project, index) => (
        <ProjectExperienceItem key={index} project={project} styles={styles} />
      ))}
    </div>
  );
};

export default ProjectExperience;
