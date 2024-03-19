const stdResumeData = {
  // 数据信息
  lastUpdated: '2024-02-27T12:00:00.000Z',

  // 个人信息
  personalInfo: {
    firstName: '约翰',
    surname: '道',
    userTel: '+1234567890',
    userEmail: 'johndoe@example.com',
    linkedIn: 'https://www.linkedin.com/in/johndoe',
  },

  // 教育经历
  educationInfo: [
    {
      id: 1,
      curUni: 'XYZ大学',
      city: '示例城市',
      state: '示例州',
      curCountry: '示例国家',
      curDegree: '理学学士',
      curMajor: '计算机科学',
      graduationDate: '2023-05-30',
      score: 'GPA 3.8',
      achievement: '院长名单',
      curCourses: ['课程1', '课程2', '课程3'],
    },
    // 可以继续添加其他教育经历的信息
  ],

  // 工作经历
  workExperience: [
    {
      id: 1,
      role: '软件工程师',
      groupName: '科技解决方案',
      company: '示例公司',
      city: '科技城',
      state: '科技州',
      country: '科技国家',
      startDate: '2020-07-15',
      endDate: '2023-12-31',
      workSummary: '开发Web应用',
      workDetail: '实施新功能并修复错误',
    },
    {
      id: 2,
      role: '软件工程师',
      groupName: '科技解决方案',
      company: '示例公司',
      city: '科技城',
      state: '科技州',
      country: '科技国家',
      startDate: '2020-07-15',
      endDate: '2023-12-31',
      workSummary: '开发Web应用',
      workDetail: '实施新功能并修复错误',
    },
    // 可以继续添加其他工作经历的信息
  ],

  // 项目经验
  projectExperience: [
    {
      id: 1,
      projectTitle: '电子商务网站开发',
      courseName: 'Web开发课程',
      schoolName: '编程学院',
      city: '编程城市',
      state: '编程州',
      country: '编程国家',
      startDate: '2022-01-01',
      endDate: '2022-05-31',
      projectSummary: '使用React和Node.js构建电子商务网站',
      projectDetail: '设计前端UI并实施后端逻辑',
    },
    // 可以继续添加其他项目经验的信息
  ],

  // 研究经验
  researchExperience: [
    {
      id: 1,
      researchTitle: '机器学习研究',
      schoolName: '研究所',
      city: '研究城市',
      state: '研究州',
      country: '研究国家',
      startDate: '2021-03-01',
      endDate: '2022-02-28',
      researchSummary: '探索机器学习算法',
      researchDetail: '进行实验并分析结果',
    },
    // 可以继续添加其他研究经验的信息
  ],

  // 其他信息
  publicationsPresentations: '在人工智能领域发表论文',
  skillsActivitiesInterests: {
    language: '英语，西班牙语',
    getSkills: '解决问题，团队合作',
    industrySkills: '软件开发，数据分析',
    relevantCertificates: '认证Web开发人员',
    volunteerWork: '在当地收容所进行社区服务',
    interest1: '旅行，摄影',
  },
};

export default stdResumeData;
