export const getComponentMap = (
  PersonalInfo,
  EducationInfo,
  WorkExperience,
  ProjectExperience,
  ResearchExperience,
  PublicationsPresentations,
  SkillsActivitiesInterests
) => {
  const components = [
    { name: 'personalInfo', component: PersonalInfo },
    { name: 'educationInfo', component: EducationInfo },
    { name: 'workExperience', component: WorkExperience },
    { name: 'projectExperience', component: ProjectExperience },
    { name: 'researchExperience', component: ResearchExperience },
    { name: 'publicationsPresentations', component: PublicationsPresentations },
    { name: 'skillsActivitiesInterests', component: SkillsActivitiesInterests },
  ];

  const componentMap = {};

  components.forEach(({ name, component }) => {
    if (component) {
      componentMap[name] = component;
    }
  });

  return componentMap;
};
