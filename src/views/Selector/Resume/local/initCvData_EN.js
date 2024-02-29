const stdResumeData = {
  // 数据信息
  lastUpdated: '2024-02-27T12:00:00.000Z',

  // 个人信息
  personalInfo: {
    firstName: 'John',
    surname: 'Doe',
    userTel: '+1234567890',
    userEmail: 'johndoe@example.com',
    linkedIn: 'https://www.linkedin.com/in/johndoe',
  },

  // 教育经历
  educationInfo: [
    {
      id: 1,
      curUni: 'University of XYZ',
      city: 'Example City',
      state: 'Example State',
      curCountry: 'Example Country',
      curDegree: 'Bachelor of Science',
      curMajor: 'Computer Science',
      graduationDate: '2023-05-30',
      score: 'GPA 3.8',
      achievement: "Dean's List",
      curCourses: ['Course 1', 'Course 2', 'Course 3'],
    },
    // 可以继续添加其他教育经历的信息
  ],

  // 工作经历
  workExperience: [
    {
      id: 1,
      role: 'Software Engineer',
      groupName: 'Tech Solutions',
      company: 'Example Inc.',
      city: 'Tech City',
      state: 'Tech State',
      country: 'Tech Country',
      startDate: '2020-07-15',
      endDate: '2023-12-31',
      workSummary: 'Developed web applications',
      workDetail: 'Implemented new features and fixed bugs',
    },
    {
      id: 2,
      role: 'Software Engineer',
      groupName: 'Tech Solutions',
      company: 'Example Inc.',
      city: 'Tech City',
      state: 'Tech State',
      country: 'Tech Country',
      startDate: '2020-07-15',
      endDate: '2023-12-31',
      workSummary: 'Developed web applications',
      workDetail: 'Implemented new features and fixed bugs',
    },
    // 可以继续添加其他工作经历的信息
  ],

  // 项目经验
  projectExperience: [
    {
      id: 1,
      projectTitle: 'E-commerce Website Development',
      courseName: 'Web Development Course',
      schoolName: 'Coding Academy',
      city: 'Coding City',
      state: 'Coding State',
      country: 'Coding Country',
      startDate: '2022-01-01',
      endDate: '2022-05-31',
      projectSummary: 'Built an e-commerce website using React and Node.js',
      projectDetail: 'Designed frontend UI and implemented backend logic',
    },
    // 可以继续添加其他项目经验的信息
  ],

  // 研究经验
  researchExperience: [
    {
      id: 1,
      researchTitle: 'Machine Learning Research',
      schoolName: 'Research Institute',
      city: 'Research City',
      state: 'Research State',
      country: 'Research Country',
      startDate: '2021-03-01',
      endDate: '2022-02-28',
      researchSummary: 'Explored machine learning algorithms',
      researchDetail: 'Conducted experiments and analyzed results',
    },
    // 可以继续添加其他研究经验的信息
  ],

  // 其他信息
  publicationsPresentations: 'Published paper on Artificial Intelligence',
  skillsActivitiesInterests: {
    language: 'English, Spanish',
    getSkills: 'Problem-solving, Teamwork',
    industrySkills: 'Software Development, Data Analysis',
    relevantCertificates: 'Certified Web Developer',
    volunteerWork: 'Community Service at Local Shelter',
    interest1: 'Traveling, Photography',
  },
};

export default stdResumeData;
