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
        <HorizontalLayout>
          <SubHeading text={getProject} />{' '}
          <Paragraph text={`${city} ${state} ${country}`} />
        </HorizontalLayout>

        <HorizontalLayout>
          <Paragraph text={schoolName} />
          <Paragraph text={`${startDate} - ${endDate}`} />
        </HorizontalLayout>

        <Paragraph text={projectSummary} styles={styles} />
        <ParagraphList text={projectDetail} />
      </div>
    );
  };

  return (
    <main>
      <Heading text={sectionName} />

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
