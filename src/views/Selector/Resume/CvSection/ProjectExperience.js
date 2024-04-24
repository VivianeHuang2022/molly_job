import { Heading,Paragraph, SubHeading } from './cvComps/CvTypography';

const ProjectExperience = ({ cvData, sectionName, styles }) => {
  const projectExperience = cvData;

  const { cvSection } = styles;


  const ProjectExperienceItem = ({ project }) => {
    const {
      getProject,
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
        <SubHeading text={getProject}  />
        <Paragraph text={schoolName} />
        <Paragraph text={`${city} ${state} ${country}`} />
        <Paragraph text={`${startDate} - ${endDate}`} />
        <Paragraph text={projectSummary} styles={styles} />
        <Paragraph text={projectDetail} />
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
