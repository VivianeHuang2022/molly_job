import {
  Heading,
  Paragraph,
  SubHeading,
  HorizontalLayout,
  ParagraphList,
} from './cvComps/CvTypography';

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
        <HorizontalLayout styles={styles}>
          <SubHeading text={getProject} styles={styles} />
          <Paragraph text={`${city} ${state} ${country}`} styles={styles} />
        </HorizontalLayout>

        <HorizontalLayout styles={styles}>
          <Paragraph text={schoolName} styles={styles} />
          <Paragraph text={`${startDate} - ${endDate}`} styles={styles} />
        </HorizontalLayout>

        <Paragraph text={projectSummary} styles={styles} />
        <ParagraphList text={projectDetail} styles={styles} />
      </div>
    );
  };

  return (
    <main>
      <Heading text={sectionName} styles={styles} />

      <div className={cvSection}>
        {projectExperience.map((project, index) => (
          <ProjectExperienceItem
            key={index}
            project={project}
            styles={styles}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectExperience;
