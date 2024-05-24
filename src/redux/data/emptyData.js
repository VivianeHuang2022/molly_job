export const cvSection = {
  personalInfo: {
    sectionName: 'Personal',
    data: {
      firstName: '',
      surname: '',
      userTel: '',
      userEmail: '',
      userLinkedln: '',
    },
  },
  dreamInfo: {
    sectionName: 'Dream',
    data: [
      {
        id: 1,
        dreamDegree: '',
        dreamUni: '',
        dreamMajor: '',
        dreamCountry: '',
      },
    ],
  },
  educationInfo: {
    sectionName: 'Education',
    //20240423 lily 不同经历信息一模一样所以用相同变量 是否当前经历只做id区别
    data: [
      {
        id: 1,
        currentUni: '',
        city: '',
        state: '',
        currentCountry: '',
        currentDegree: '',
        currentMajor: 'Major:Computer ',
        startDate: '',
        endDate: '',
        currentGPA: 'GPA:3.8',
        achievement: '',
        currentCourses: '',
      },
    ],
  },
  projectExperience: {
    sectionName: 'Project Experience',
    data: [
      {
        id: 1,
        getProject: '',
        schoolName: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        endDate: '',
        projectSummary: '',
        projectDetail: '',
      },
    ],
  },
  workExperience: {
    sectionName: 'Work Experience',
    data: [
      {
        id: 1,
        role: '',
        groupName: '',
        company: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        endDate: '',
        workSummary: '',
        workDetail: '',
      },
      {
        id: 2,
        role: '',
        groupName: '',
        company: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        endDate: '',
        workSummary: '',
        workDetail: '',
      },
    ],
  },
  researchExperience: {
    sectionName: 'Research Experience',
    data: [
      {
        id: 1,
        researchTitle: '',
        schoolName: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        endDate: '',
        researchSummary: '',
        researchDetail: '',
      },
    ],
  },
  publicationsPresentations: {
    sectionName: 'Publications',
    data: [
      {
        id: 1,
        getConference: '',
      },
    ],
  },
  skillsActivitiesInterests: {
    sectionName: 'Skills Activities Interests',
    data: {
      language: '',
      getSkills: '',
      relevantCertificates: '',
      volunteerWork: '',
      interest: '',
      getAwards: '',
      getCompetitions: '',
    },
  },
  // resume其他部分的信息...
};

export const currentSectionType = [
  'personalInfo',
  'educationInfo',
  'workExperience',
  'projectExperience',
  'researchExperience',
  'publicationsPresentations',
  'skillsActivitiesInterests',
];

export const allSectionType = [
  'personalInfo',
  'educationInfo',
  'workExperience',
  'projectExperience',
  'researchExperience',
  'publicationsPresentations',
  'skillsActivitiesInterests',
];
