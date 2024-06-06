// texts_cn.js
const texts_cn = {
  startTexts: {
    pageTitle: '欧洲留学 or 欧洲求职？',
    studyingAbroadTitle: '留学',
    studyingAbroadParagraph:
      '生成你的留学简历和求职信（例如大学入学、奖学金申请等）。',
    jobMentoringTitle: '职业辅导',
    jobMentoringParagraph1: '1对1模拟面试',
    jobMentoringParagraph2: '专业简历制作',
    jobMentoringParagraph3: '职业求职信撰写',
    footLine: '展示你的资质、经历、目标与成就',
  },
  homeTexts: {
    studyTitle: '你的大学指南',
    careerTitle: '你的职业指南',
    applicationTxt: '推荐信',
    interviewTxt: '面试模拟',
    coverletterTxt: '动机信',
    resumeTxt: '简历',
    recommendationTxt: '推荐信',
    paymentTxt: '支付方案',
    uniGuidTxt: '大学向导',
    matchTxt: '匹配',
  },
  modalTexts: {
    title: '输入你的信息来聊聊吧！',
    interviewTitle: '开启模拟面试！',
    uploadTitle: '上传简历',
    interviwContent:
      '通过这次模拟面试，我们将通过模拟特定的面试场景，针对你的求职岗位，突出核心优势和并会给出针对性的求职建议。',
    uploadContent:
      '通过简历，我们通过你的个人经历，使用数字和案例去量化，突出你的个人成就、技能和资质，争取面试机会。',
  },
  QuestionP: {
    back: '返回',
    next: '下一页',
  },
  GeberalQ: {
    JobPage: {
      Page1: {
        Q_title: '你期望申请什么工作',
        D_Title: '期望职位*',
        D_Title_PH: '软件开发工程师',
        D_Company: '期望公司*',
        D_Company_PH: 'Meta',
        D_Description: '工作描述*',
        D_Description_PH:
          '在Google的SDE角色的工作描述通常包括设计、开发和维护软件应用程序，参与代码审查，与跨功能团队合作，以及为整个软件开发生命周期做出贡献。',
      },
      Page2: {
        Q_title: '你最近的工作是什么',
        R_Title: '职位*',
        R_Title_PH: '软件开发工程师(SDE)',
        R_Company: '公司*',
        R_Company_PH: 'Google',
        R_Description: '主要职责*',
        R_Description_PH:
          ' - 设计和开发软件解决方案。\n- 与产品经理、设计师和其他工程师合作。\n - 参与代码审查并提供反馈。\n- 调试和解决软件缺陷。\n- 维护和改进现有软件系统。\n- 为确保改进符合性能目标而进行严格的测试和基准测试。',
      },
      Page3: {
        Q_title: '选出你的最厉害的三种技能',
        TOP1: '第一',
        TOP1_PH: '分析能力',
        TOP2: '第二',
        TOP2_PH: '注重细节',
        TOP3: '第三',
        TOP3_PH: '战略性',
        Skills: [
          ['Python', 'Java', 'C++'],
          ['敏捷、Scrum', '版本控制'],
          ['Web开发', '数据库SQL', '数据结构'],
          ['计算机视觉', '自然语言处理算法'],
        ],
      },
      Page4: {
        Q_title: '你最大的成就是什么',
        Q_Backgrund: '讲讲你的职业背景',
        Q_Backgrund_PH: '该项目涉及优化高流量的Web应用程序的性能。',
        Q_Action: '你是如何成功的（采取的行动）',
        Q_Action_PH:
          '- 比如：对现有代码库进行彻底分析，并识别性能瓶颈。\n- 制定详细的代码重构和优化策略。\n- 领导一个由五名工程师组成的团队，实施变更并与其他团队协调，以最小化干扰。\n- 实施严格的测试和基准测试，确保改进达到性能目标。',
        Q_Result: '你取得了怎样的成就？*',
        Q_Result_PH:
          '比如：该项目提前两周完成，应用程序的响应时间提高了20%，用户满意度提高，服务器成本降低。',
      },
      Page5: {
        Q_title: '你有多少年的工作经验？*',
        Q_Notification: '实习和非正式工作也可以包括在内。',
      },
    },
    StdPage: {
      PgaeTitle: '回答问题，生成你的大学申请动机信',
      Page1: {
        P1Q1: '你梦想留学的国家是？',
        P1Q1_PH: '德国',
        P1Q1_Options: [
          '*美国',
          '*德国',
          '*澳大利亚',
          '*丹麦',
          '*比利时',
          '*...',
        ],
        P1Q2: '你梦想的大学是哪一所？',
        P1Q2_PH: '柏林工业大学',
        P1Q2_Options: [
          '*柏林工业大学',
          '*慕尼黑工业大学',
          '*德累斯顿工业大学',
          '*亚琛工业大学',
          '*汉诺威工业大学',
          '*...',
        ],
        P1Q3: '你打算申请什么学位？',
        P1Q3_PH: '硕士',
        P1Q4: '你打算申请什么专业？',
        P1Q4_PH: '计算机',
      },
      Page2: {
        P2Q1: '你为什么对该大学学习感兴趣？',

        P2T1: '我希望申请',
        P2T2: '学位，并希望申请对应的大学，也就是',
        P2T3: ', 学校位于',
        P2T4: '学校在该专业领域上十分出名，也就是，',
        P2T5: '我目前的最高学历是',
        P2T6: '我的专业是',
        P2T7: '， 曾就读于',
        P2T8: '， 该大学位于',
        P2T9: '， 通过大学学习，我在专业领域获得了扎实的知识，尤其是',
        P2T10: '同时，我还学习了以下这些核心课程',
        P2T11: '，这让我对该专业领域产生了极大的兴趣',
      },
      Page3: {
        P3Q1: '你的学术背景是什么，它与你申请的专业有什么联系？',

        P3T1: '在我的学业过程中，我有机会参与了一个专注于的研究项目',
        P3T2: '这个研究努力最终形成了一篇发表在',
        P3T3: '的论文，我荣幸地获得了',
        P3T4: '奖励以表彰我的贡献。此外，我还参与了',
        P3T5: '，这丰富了我对',
        P3T6: '的实际理解。这些经历不仅扩展了我在',
        P3T7: '领域的知识，而且我在',
        P3T8: '实习期间作为',
        P3T9: '在',
        P3T10: '的经历提高了我在这个行业的熟练程度。',
      },
      Page4: {
        P4Q1: '你能提供你学术或研究成就的例子（比如期刊，小组项目，竞赛等），证明你在该专业取得成功的潜力吗？（没有可不填）',

        P4T1: '在',
        P4T2: '的课程与我的学术兴趣紧密契合，尤其是在课程方面，比如',
        P4T3: '，这些课程激发了我在',
        P4T4: '方面的热情。',
        P4T5: ',',
        P4T6: '方面的专业知识。我的长期职业目标是',
        P4T7: '，我将在学业中获得的知识来在该领域产生有意义的影响。',
      },
      Page5: {
        P5Q1: '你具备哪些相关经验和技能（如工作实习经验，志愿者经验），使你成为该专业领域里不错的候选人？',

        P5T1: '名字',
        P5T2: '姓氏',
        P5T3: '国籍',
        P5T4: '生日',
        P5T5: '地址',
        P5T6: '电话',
        P5T7: '电子邮件',

        P5T8: '提交表格，即可生成动机信',
      },
      Page6: {
        P6Q1: '你的学术兴趣与该专业的课程相匹配吗？',
      },
      Page7: {
        P7Q1: '你的长期职业目标是什么，这个项目在哪些方面符合你的职业规划？',
      },
      Page22: {
        P2Q1: '你现在居住在哪里？',
        P2Q1_Options: ['*北京', '*武汉', '*上海', '*南京', '*广州', '*...'],
        P2Q2: '你在哪所大学学习？',
        P2Q2_Options: [
          '*武汉大学',
          '*北京大学',
          '*上海交通大学',
          '*清华大学',
          '*南京大学',
          '*...',
        ],
      },
      Page33: {
        P3Q1: '你想申请什么专业？',
        P3Q1_Options: [
          '*电气自动化',
          '*机械工程',
          '*电气工程',
          '*计算机工程',
          '*软件工程',
          '*...',
        ],
        P3Q2: '你想申请什么学位？',
        P3Q2_Options: ['*学士', '*硕士', '*博士'],
      },
      Page44: {
        P4Q1: '你现在的专业是什么？',
        P4Q1_Options: [
          '*电气自动化',
          '*机械工程',
          '*电气工程',
          '*计算机工程',
          '*软件工程',
          '*...',
        ],
        P4Q2: '你目前的最高学位是什么？',
        P4Q2_Options: ['*学士', '*硕士', '*博士', '*...'],
      },
    },
  },
  generateDocument: {
    chooseLan: {
      title: '您选择的语言是',
      option: {
        zh: '中文',
        en: '英文',
        de: '德语',
      },
    },
    chooseTemplate: {
      title: '当前模板',
      templateName: '样式',
    },
    buttonLabel: {
      generateDocument: '生成文档',
      goPayment: '查看充值方案',
      tryAgain: '稍后重试',
      backToEdit: '返回编辑',
      generateLoading: '生成中...',
    },
    currentGenerateCountTips: '当前剩余生成次数',
    confirmationContent:
      '您目前有 {remainingCount} 次生成机会。生成将消耗 1 次机会。确定要继续吗？',
    successMessage: '生成成功！',
    errorMessage: '获取用户账户信息失败：',
    generateLoading: '正在为您生成文件中,请勿关闭页面...',

    confirmationTitle: '确认生成',

    notEnoughCountMessage: '您当前的的生成次数为0，查看充值计划获取次数：',
    errorMessageGenerate: '生成失败：',
    firstTimeMessage:
      '欢迎使用Molly Job，生成文档将消耗1次生成次数。由于您是初次使用，我们将免费赠送您1次生成次数进行体验。',
  },
  QRCode: {
    pageTitle: '支付页面',
    title: {
      scanQRCode: '请扫描二维码完成支付',
      expired: '二维码已过期，点击刷新重试',
    },
    timer: '剩余时间:',
    buttonLabel: '刷新',
    error: {
      reason: {
        paymentNotFound: '未找到支付类型',
        qrNotLoad: 'QRcode 未加载.',
      },
      actionTip: '请返回重试',
    },
  },

  plans: {
    pricingType: {
      monthly: '月',
      annual: '年',
      timesNum: '-',
      times: '次',
    },
    priceSymbol: '¥',
    paymentType: {
      superPro: {
        label: '超级专业',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '429',
          timesNum: '10',
        },
        info: '为申请多个国家多语言的申请人，量身定制，超过1000份海内外名校申请文书,支持50多种语言，提供10次申请文书生成,为每个项目打造完美的申请材料,无限使用任何模板。完成支付可免费入当地留学群，并获得留学生活指南',
        features: [
          { type: 'generationCounts', text: '10次使用机会' },
          { type: 'documentsType', text: '所有文档可用' },
          { type: 'templateRestrictions', text: '无模板限制，免费留学咨询' },
        ],
        level: '专业',
      },
      pro: {
        label: '专业',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '99',
          timesNum: '5',
        },
        info: '为申请人量身定制，超过1000份海内外名校申请文书,支持50多种语言，提供5次文档生成机会,确保每份申请材料都经过定制,并可完全访问所有模板。完成支付可免费入当地留学群，并获得留学生活指南',
        features: [
          { type: 'generationCounts', text: '5次生成机会' },
          { type: 'documentsType', text: '所有文档可用' },
          { type: 'templateRestrictions', text: '支持超20+国家留学申请' },
        ],
        level: '专业',
      },
      standard: {
        label: '标准',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '49',
          timesNum: '1',
        },
        info: '理想的一两所学校申请方案,提供1次文档生成机会,并可访问超过50个会员模板,打造出众的申请材料。',
        features: [
          { type: 'generationCounts', text: '1次生成机会' },
          { type: 'documentsType', text: '所有文档可用' },
          { type: 'templateRestrictions', text: '超过50个会员模板' },
        ],
        level: '标准',
      },
    },
  },
  orderResult: {
    success: '订单成功',
    fail: '订单失败',
    checkOrder: '查看订单',
    continueGenerate: '继续生成',
    backToPlan: '返回到方案 test',
    contact: '请尝试返回上一页重试或联系客服：',
    details: {
      orderType: '支付方案',
      generateCount: '生成次数',
      orderAmount: '花费金额',
      orderId: '订单id',
    },
  },
  download: {
    documentGenerated: '文档已生成，点击下载获取',
    downloadNotice: '下载同时会自动发送至您的邮箱',
    downloadPdf: 'Download PDF',
    generationTime: '文档生成时间',
    contactEmail: '如有任何问题请联系',
    backToGenerate: '返回生成',
  },

  recommendation: {
    title: {
      personalInfo: '确认你的个人信息',
      refereeInfo: '填写推荐人信息',
    },
    sectionTitle: {
      majorApplication: '专业申请',
      recommenderInformation: '推荐人信息',
      backgroundOfRecommender: '推荐人背景',

      userInfoTitle: '用户信息',
      dreamSchoolInfoTitle: '梦想学校信息',
      currentSchoolInfoTitle: '当前学校信息',

      starInstructions: '使用 STAR 原则描述一个故事：',
      situation: '情境：提供正在发生的情况或原因。',
      task: '任务：目标或需要解决的问题是什么？',
      action: '行动：解决任务或挑战所采取的具体步骤。',
      result: '结果：行动的结果和成就。',
      activityInvolved: '涉及的活动',
    },
    major: {
      label: '专业',
      placeholder: '请输入...',
    },
    recommender: {
      firstName: {
        label: '名',
        placeholder: '请输入名字',
      },
      lastName: {
        label: '姓',
        placeholder: '输入姓氏',
      },
      relationship: {
        label: '关系',
        placeholder: '导师/教授/主管/经理',
      },
      institution: {
        label: '所在机构',
        placeholder: '大学/公司',
      },
      position: {
        label: '职位',
        placeholder: '请具体说明推荐人的职位或头衔',
      },
      phone: {
        label: '电话号码',
        placeholder: '推荐人的联系号码',
      },
      email: {
        label: '电子邮件',
        placeholder: '王晓明@example.com',
      },
      address: {
        label: '地址',
        placeholder: '邮寄地址',
      },
      zipCode: {
        label: '邮政编码',
        placeholder: '地址的邮政编码',
      },
    },
    intro: {
      label: '推荐人背景',
      placeholder: '请输入...',
    },
    userInfo: {
      firstName: {
        label: '名字',
        placeholder: '请输入您的名字',
      },
      surname: {
        label: '姓氏',
        placeholder: '请输入您的姓氏',
      },
    },
    dreamSchoolInfo: {
      applySchool: {
        label: '申请学校',
        placeholder: '请输入您申请的学校名称',
      },
      applyProgram: {
        label: '申请项目',
        placeholder: '请输入您申请的项目名称',
      },
      dreamDegree: {
        label: '理想学位',
        placeholder: '请输入您梦想获得的学位',
      },
      dreamUni: {
        label: '理想大学',
        placeholder: '请输入您梦想的大学名称',
      },
      dreamUniAddress: {
        label: '理想大学地址',
        placeholder: '请输入您梦想大学的地址',
      },
      dreamMajor: {
        label: '理想专业',
        placeholder: '请输入您梦想就读的专业',
      },
      dreamCountry: {
        label: '理想国家',
        placeholder: '请输入您梦想留学的国家',
      },
    },
    currentSchoolInfo: {
      currentUni: {
        label: '当前大学',
        placeholder: '请输入您目前就读的大学名称',
      },
      currentCountry: {
        label: '当前国家',
        placeholder: '请输入您目前所在的国家',
      },
      currentDegree: {
        label: '当前学位',
        placeholder: '请输入您目前正在攻读的学位',
      },
      currentMajor: {
        label: '当前专业',
        placeholder: '请输入您目前就读的专业',
      },
      currentGPA: {
        label: '当前GPA',
        placeholder: '请输入您目前的GPA成绩',
      },
    },
    activity: {
      label: '参与活动',
      placeholder: '请分享您的故事...',
    },
    buttonLabel: '提交',
  },
  historyTexts: {
    remainingCounts: '剩余数量：',
    generateCountsHistory: '生成数量历史记录：',
    increment: '增加',
    payment: '充值',
    generate: '生成',
    count: '数量',
    time: '时间',
    buttonBack: '返回',
    coverletter: '申请信',
    recommendation: '推荐信',
    pro: '高级计划',
    superPro: '超级计划',
    standard: '标准计划',
  },
  resumeTxt: {
    personalInfo: {
      firstName: '名字',
      surname: '姓氏',
      userTel: '电话号码',
      userEmail: '电子邮件',
      userLinkedln: '领英',
    },
    educationInfo: {
      currentUni: '大学',
      city: '城市',
      state: '州',
      currentCountry: '国家',
      currentDegree: '主修学位',
      currentMajor: '专业',
      startDate: '入学日期',
      endDate: '毕业日期',
      currentGPA: 'GPA和荣誉',
      currentCourses: '课程',
      achievement: '成就',
    },
    workExperience: {
      role: '职位名称',
      groupName: '团队名称',
      company: '公司',
      city: '城市',
      state: '州',
      country: '国家',
      startDate: '开始日期',
      endDate: '结束日期',
      workSummary: '工作摘要',
      workDetail: '工作详情',
    },
    projectExperience: {
      getProject: '项目名称',
      schoolName: '学院/机构/公司',
      city: '城市',
      state: '州',
      country: '国家',
      startDate: '开始日期',
      endDate: '结束日期',
      projectSummary: '项目摘要',
      projectDetail: '项目详情',
    },
    researchExperience: {
      researchTitle: '研究标题',
      schoolName: '学院/机构/公司',
      city: '城市',
      state: '州',
      country: '国家',
      startDate: '开始日期',
      endDate: '结束日期',
      researchSummary: '研究摘要',
      researchDetail: '研究详情',
    },
    publicationsPresentations: {
      getConference: '出版物与演示',
    },
    skillsActivitiesInterests: {
      language: '语言1，语言2',
      getSkills: '技能',
      relevantCertificates: '证书',
      volunteerWork: '志愿者工作',
      interest: '兴趣',
      getAwards: '获奖',
      getCompetitions: '竞赛',
    },
    interface: {
      saveButton: '保存',
      downloadButton: '下载',
    },
  },
  chooseTemplate: {
    title: '当前模板',
    templateName: '样式',
  },
  tips: {
    dataNotSaved: '数据暂未保存,请稍后再试.',

    fillIn: '请填写全部必填项',
    fillInSingle: '请填写必填项',
  },
};

export default texts_cn;
