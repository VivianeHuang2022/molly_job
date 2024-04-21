export const cvSection = {
  personalInfo: {
    sectionName: 'Personal',
    data: {
      firstName: '',
      surname: '',
      userTel: '',
      userEmail: '',
      userLinkedln: '',
      userNationality: '',
      userBirthday: '',
      userAddress: '',
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
    data: [
      {
        id: 1,
        uniName: '',
        uniCity: '',
        uniState: '',
        uniCountry: '',
        uniDegree: '',
        uniMajor: '',
        uniStartDate: '',
        uniEndDate: '',
        uniGPA: '',
        uniAchievement: '',
        uniCourses: '',
        // currentUni: '',
        // city: '',
        // state: '',
        // currentCountry: '',
        // currentDegree: '',
        // currentMajor: '',
        // startDate: '',
        // graduationDate: '',
        // currentGPA: '',
        // achievement: '',
        // currentCourses: '',
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

export const currentSectionType = ['personalInfo'];

export const allSectionType = [
  'personalInfo',
  'educationInfo',
  'workExperience',
  'projectExperience',
  'researchExperience',
  'publicationsPresentations',
  'skillsActivitiesInterests',
];

export const otherCV = {
  // 其他信息...
  pdf: {
    id: 1,
    fileName: '', // PDF文件名
    filePath: '', // PDF文件存储路径
    generatedTime: '', // PDF生成时间
    fieldName: '', // 后端接收文件的字段名
  },
  history: [
    {
      id: 1,
      lastUpdated: '',
      pdfInfo: {},
      personalInfo: {
        /* 个人信息 */
      },
      educationInfo: [
        /* 教育经历 */
      ],
      workExperience: [
        /* 工作经历 */
      ],
      projectExperience: [
        /* 项目经验 */
      ],
      researchExperience: [
        /* 研究经验 */
      ],
      publicationsPresentations: {
        /* 其他信息 */
      },
      skillsActivitiesInterests: {
        /* 技能、活动和兴趣信息 */
      },
    },
  ],
};
