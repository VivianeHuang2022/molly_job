// texts_cn.js
const texts_en = {
  startTexts: {
    pageTitle: 'What are you looking for?',
    studyingAbroadTitle: 'Studying abroad',
    studyingAbroadParagraph:
      'Generation of your academic resume and cover letter (e.g. university admission, scholarschip application, etc.).',
    jobMentoringTitle: 'Job mentoring',
    jobMentoringParagraph1: 'Tailored Mock Interviews',
    jobMentoringParagraph2: 'Expert Resume Crafting',
    jobMentoringParagraph3: 'Targeted Cover Letter Develoment',
    footLine:
      'Highlight your qualification, personal experiences, goals and achievements',
  },
  homeTexts: {
    studyTitle: 'YOUR UNIVERSITY GUIDE',
    careerTitle: 'YOUR CAREER GUIDE',
    applicationTxt: 'Recommendation Letter',
    interviewTxt: 'Interview',
    coverletterTxt: 'Cover Letter',
    resumeTxt: 'Resume',
    recommendationTxt: 'Recommendation',
    uniGuidTxt: 'Uni Guide',
    matchTxt: 'Match',
    paymentTxt: 'Payment',
  },
  modalTexts: {
    title: "Update your info or let's Chat!",
    interviewTitle: 'Interview now!',
    uploadTitle: 'Upload from resume',
    interviwContent:
      'Through this mock interview, our AI mentors meticulously simulate interview scenarios, providing invaluable insights into your strengths and areas for improvement.',
    uploadContent:
      'With the resume, our AI experts use a strategic approach, highlighting your achievements,skills,and qualifications in a format which captures the attention of hiring managers.',
  },
  QuestionP: {
    back: 'Back',
    next: 'Next',
  },
  GeberalQ: {
    JobPage: {
      Page1: {
        Q_title: 'WHAT JOB YOU ARE APLLYING FOR',
        D_Title: 'DESIRED POSITION*',
        D_Title_PH: 'Software Development Engineer',
        D_Company: 'DESIRED COMPANY*',
        D_Company_PH: 'Meta',
        D_Description: 'JOB DESCRIPTION*',
        D_Description_PH:
          'The job description for the SDE role at Google typically involves designing, developing, and maintaining software applications, participating in code reviews, collaborating with cross-functional teams, and contributing to the overall software development lifecycle.',
      },
      Page2: {
        Q_title: 'WHAT IS YOUR MOST RECENT JOB',
        R_Title: 'POSITION*',
        R_Title_PH: 'Software Development Engineer (SDE)',
        R_Company: 'COMPANY*',
        R_Company_PH: 'Google',
        R_Description: 'MAIN RESBONSBILITY*',
        R_Description_PH:
          ' - Designing and developing software solutions.\n- Collaborating with product managers, designers, and other engineers.\n - Participating in code reviews and providing feedback.\n- Debugging and resolving software defects.\n- Maintaining and improving existing software systems.\n- Contributing to the overall software development process.',
      },
      Page3: {
        Q_title: 'WHAT IS YOUR TOP 3 SKILLS',
        TOP1: 'TOP1',
        TOP1_PH: 'Analytical',
        TOP2: 'TOP2',
        TOP2_PH: 'Detail-oriented',
        TOP3: 'TOP3',
        TOP3_PH: 'Strategic',
        Skills: [
          ['Python', 'Java', 'C++'],
          ['Agile,Scrum', 'Version Control'],
          ['Web Development', 'Database SQL', 'Data Structure'],
          ['Computer Vision', 'NLP Algorithm'],
        ],
      },
      Page4: {
        Q_title: 'WHAT IS YOUR BIGGEST ACHIEVEMENT',
        Q_Backgrund: 'WHAT IS YOUR BACKGROUND',
        Q_Backgrund_PH:
          'The project involved optimizing the performance of a high-traffic web application.',
        Q_Action: 'HOW YOU SUCCEED (ACTIION YOU TOOK)',
        Q_Action_PH:
          '- Conducted a thorough analysis of the existing codebase and identified performance bottlenecks.\n- Developed a detailed strategy for code refactoring and optimization.\n- Led a team of five engineers in implementing the changes and coordinating with other teams to minimize disruptions.\n- Implemented rigorous testing and benchmarking to ensure the improvements met the performance goals.',
        Q_Result: 'RESULT YOU ACHIEVED*',
        Q_Result_PH:
          "The project was completed two weeks ahead of schedule, and the application's response time improved by 20%, resulting in higher user satisfaction and reduced server costs.",
      },
      Page5: {
        Q_title: 'HOW MANNY YEARS OF EXPERIENCES YOU HAVE*',
        Q_Notification: 'INTERSHIP AND UNOFFICIAL JOB COULD BE INCLUDED.',
      },
    },
    StdPage: {
      PgaeTitle: 'ANSWER THE QUESTIONS TO GET THE COVER LETTER',
      Processbar: {
        DREAM: 'Application info',
        REASON: 'Reasons for application',
        BACKGROUND: 'Educational background',
        INTERESTS: 'Interests and hobbies',
        PERSONAL: 'Personal information',
        JOB: 'Current job position',
        SKILLS: 'Skills and competencies',
        ACHIEVEMENT: 'Achievements and awards',
        EXPERIENCE: 'Work experience',
      },
      Page1: {
        P1Q1: 'WHERE IS YOUR DREAM COUNTRY?',
        P1Q1_PH: 'Germany',
        P1Q1_Options: [
          '*USA',
          '*Germany',
          '*Australia',
          '*Denmark',
          '*Belgium',
          '*...',
        ],
        P1Q2: 'WHERE IS YOUR DREAM UNIVERSITY?',
        P1Q2_PH: 'TU Berlin',
        P1Q2_Options: [
          '*TU Berlin',
          '*TU Munich',
          '*TU Dresden',
          '*TU Achen',
          '*TU Hannover',
          '*...',
        ],
        P1Q3: 'WHTA DEGREE YOU ARE APPLYING FOR',
        P1Q3_PH: 'Master',
        P1Q4: 'WHTA MAJOR YOU ARE APPLYING FOR',
        P1Q4_PH: 'Computer Science',
      },
      Page2: {
        P2Q1: 'WHY ARE YOU INTERESTED IN STUDYING AT THE SPECIFIC UNIVERSITY IN GERMANY?',

        P2T1: 'I am enthusiastic about pursuing my',
        P2T2: 'degree at',
        P2T3: 'in',
        P2T4: 'due to its distinguished reputation in',
        P2T5: 'I hold a',
        P2T6: 'degree in',
        P2T7: 'from',
        P2T8: 'in',
        P2T9: '. where I gained a solid foundation in my major and developed a strong background in',
        P2T10: ' . Moreover, my coursework in',
        P2T11: ' have deepened my interest in this field',

        AppliedDegree:
          'Enter the degree you are applying for: Bachelor，Master， PhD',
        AppliedUni: 'Name of the university you wish to apply to (in English)',
        AppliedCountry: 'Target country',
        AppliedMajor: 'Your intended major',
        CurrentDegree:
          'Enter your current degree: High School, Bachelor，Master',
        CurrentMajor: 'Your current major',
        CurrentUni: 'Name of your current university',
        CurrentCountry: 'Country where your current university is located',
        CurrentCourses: '3-5 major courses',
      },
      Page3: {
        P3Q1: "WHAT IS YOUR ACADEMIC BACKGROUND AND HOW DOES ITALIGN WITH THE PROGRAM YOU'RE APPLYING TO?",

        P3T1: 'During my studies, I had the opportunity to engage in a research project focused on',
        P3T2: 'This research endeavor culminated in a published paper in ',
        P3T3: ', and I was honored with the ',
        P3T4: ' for my contributions. Furthermore, I have been involved in ',
        P3T5: ' , which enriched my practical understanding of',
        P3T6: ' . These experiences have not only expanded my knowledge in',
        P3T7: ' Furthermore, my internships as a/an',
        P3T8: ' at',
        P3T9: ' enhanced my proficiency in this industry',

        Project: 'If available, describe the project',
        Conference: 'mention the journal or conference',
        AwardsAndRecognitions: 'mention any awards or recognition',
        VolunteerWork: 'mention volunteer work or competitions',
        ResearchAndSkill: 'specific research area or skill',
        InternRole: 'Previous Internship Role',
        InternCompany: 'Previous Internship Company',
      },
      Page4: {
        P4Q1: 'CAN YOU PROVIDE EXAMPLE OF YOUR ACADEMIC OR RESEARCH ACHIEVEMENTS THAT DEMONSTRATE YOUR POTENTIAL FOR SUCCESS IN THE PROGRAM?',

        P4T1: 'The program at',
        P4T2: 'aligns seamlessly with my academic interests, especially in courses like',
        P4T3: ' that fuel my passion in',
        P4T4: " . I'm inspired by the university's academic excellence and faculty expertise",
        P4T5: ' . ',
        P4T6: ' My long-term career goal is to ',
        P4T7: ' I will gain during my studies to make a meaningful impact in the field.',

        CareerGoal: 'describe your career or academic goal',
      },
      Page5: {
        P5Q1: 'WHAT RELEVANT EXPERIENCE AND SKILLS MAKE YOU A STRONG CANDIDATE FOR THE PROGRAM?',

        P5T1: ' First name ',
        P5T2: ' Last name ',
        P5T3: ' Nationality',
        P5T4: ' Birthday ',
        P5T5: ' Address ',
        P5T6: ' Tel ',
        P5T7: ' Email ',

        P5T8: ' FINAL STEP ',
      },
      Page6: {
        P6Q1: "HOW DO YOUR ACADEMIC AND RESEARCH INTERESTS MATCH THE PROGRAM's CURRICULUM?",
      },
      Page7: {
        P7Q1: 'WHAT ARE YOUR LONG-TERM CAREER GOALS, AND HOW DOES THIS PROGRAM FIT INTO YUUR CAREER PATH?',
      },
      Page8: {
        P8Q1: 'WHAT LANGUAGE PROFICIENCY DO YOU HAVE, AND HAVE YOU TAKEN ANY LANGUAGE PROFICIENCY TESTS?',
      },
      Page22: {
        P2Q1: 'WHAT IS YOUR LOCATION NOW?',
        P2Q1_Options: [
          '*Beijing',
          '*Wuhan',
          '*Shanghai',
          '*Nanjing',
          '*Guangzhou',
          '*...',
        ],
        P2Q2: 'WHICH COLLEGE DID YOU STUDY IN?',
        P2Q2_Options: [
          '*Wuhan College',
          '*Peiking university',
          '*Shanghai Jiao Tong University',
          '*Tsinghua University',
          '*Nanjing University',
          '*...',
        ],
      },
      Page33: {
        P3Q1: 'WAHT MAJOR DO YOU WANT TO APPLY FOR?',
        P3Q1_Options: [
          '*Electric Automation',
          '*Mechanical Engineering',
          '*Electrical Engineering',
          '*Computer Engineering',
          '*Software Engineering',
          '*...',
        ],
        P3Q2: 'WHICH DEGREE DO YOU WANT TO APLLY FOR?',
        P3Q2_Options: ['*Bachelor', '*Master', '*Doctor'],
      },
      Page44: {
        P4Q1: "WAHT'S YOUR MAJOR NOW?",
        P4Q1_Options: [
          '*Electric Automation',
          '*Mechanical Engineering',
          '*Electrical Engineering',
          '*Computer Engineering',
          '*Software Engineering',
          '*...',
        ],
        P4Q2: "WAHT'S YOUR HIGHEST DEGREE NOW?",
        P4Q2_Options: ['*Bachelor', '*Master', '*Doctor', '*...'],
      },
    },
  },
  generateDocument: {
    chooseLan: {
      title: 'The language you have chosen is',
      option: {
        zh: 'Chinese',
        en: 'English',
        de: 'German',
      },
    },
    chooseTemplate: {
      title: 'Current template',
      templateName: 'Style',
    },
    buttonLabel: {
      generateDocument: 'Generate Document',
      goPayment: 'View Payment Plans',
      tryAgain: 'Try Again',
      backToEdit: 'Back To Edit',
      generateLoading: 'Generating...',
    },
    currentGenerateCountTips: 'Current Remaining Generation Count',
    confirmationTitle: 'Confirm Generation',
    confirmationContent:
      'You currently have {remainingCount} generation attempts. Generating will consume 1 attempt. Are you sure you want to proceed?',
    successMessage: 'Generation successful!',
    errorMessage: 'Failed to retrieve user account information: ',
    notEnoughCountMessage:
      'You have 0 generation attempts left. Check the recharge plan for more attempts: ',
    generateLoading:
      'We are generating files for you, please do not close the page',
    errorMessageGenerate: 'Generation failed: ',
    firstTimeMessage:
      'Welcome to Molly Job! Generating a document will consume 1 generation attempt. As you are using it for the first time, we will provide you with 1 free generation attempt as a trial.',
  },
  QRCode: {
    pageTitle: 'Scan QR Code',
    title: {
      scanQRCode: 'Please scan the QR code to complete the payment',
      expired: 'The QR code has expired, click to refresh and try again',
    },
    timer: 'Remaining time:',
    buttonLabel: 'Refresh',
    error: {
      reason: {
        paymentNotFound: 'Payment type not found',
        qrNotLoad: 'QRcode is not loaded.',
      },
      actionTip: 'Please try again',
    },
  },
  plans: {
    pricingType: {
      monthly: 'month',
      annual: 'year',
      times: 'times',
    },
    priceSymbol: '¥',
    paymentType: {
      superPro: {
        label: 'Super Pro',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '429',
          timesNum: '10 ',
        },
        info: 'Tailored for ambitious students applying to multiple schools, offering 10 documents generations for crafting the perfect application for each program without any template restrictions.',
        features: [
          { type: 'generationCounts', text: 'generation opportunities' },
          { type: 'documentsType', text: 'All documents available' },
          {
            type: 'templateRestrictions',
            text: 'No template restrictions',
          },
        ],
        level: 'pro',
      },
      pro: {
        label: 'Pro',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '99',
          timesNum: '5 ',
        },
        info: 'Designed for applicants targeting a select number of programs, providing 5 document generations to ensure each application is customized and compelling, with full access to all templates.',
        features: [
          {
            type: 'generationCounts',
            text: 'generation opportunities',
          },
          { type: 'documentsType', text: 'All documents available' },
          {
            type: 'templateRestrictions',
            text: 'No template restrictions',
          },
        ],
        level: 'pro',
      },
      standard: {
        label: 'Standard',
        pricing: {
          monthly: '-',
          annual: '-',
          times: '49',
          timesNum: '1 ',
        },
        info: 'Ideal for individuals focusing on one or two school applications, with 1 document generations and access to over 50 member templates to create standout applications.',
        features: [
          {
            type: 'generationCounts',
            text: 'generation opportunities',
          },
          { type: 'documentsType', text: 'All documents available' },
          {
            type: 'templateRestrictions',
            text: 'Over 50 member templates',
          },
        ],
        level: 'standard',
      },
    },
  },
  orderResult: {
    success: 'Order Successful',
    fail: 'Order Failed',
    checkOrder: 'Check Order',
    continueGenerate: 'Continue Generating',
    backToPlan: 'Back to Plan',
    contact:
      'Please try returning to the previous page to retry or contact customer service:',
    details: {
      orderType: 'Payment Plan',
      generateCount: 'Generation Count',
      orderAmount: 'Amount Spent',
      orderId: 'Order ID',
    },
    purchaseRequest: {
      message:
        'Hi, the payment was successful. You can now generate your CV, motivation letter, etc.! If you encounter any payment issues',
      contact:
        'please contact our customer service via email: viviane.huang@stu-de.org or WeChat: Viviane_2022. We will respond within 24 hours. Thank you for using our service!',
    },
  },
  download: {
    documentGenerated: 'Document has been generated, click to download',
    downloadNotice: 'Download will also be automatically sent to your email',
    downloadPdf: 'Download PDF & Word',
    downloadSuccess: 'Download Success',
    failed:
      'There is an issue with your download URL. Please refresh and try again or contact us',
    generationTime: 'Document generation time',
    contactEmail: 'For any questions, please contact ',
    backToGenerate: 'Back to generate',
  },

  recommendation: {
    title: {
      personalInfo: 'Confirm Your Personal Information',
      refereeInfo: 'Fill the Referral Information',
    },
    sectionTitle: {
      majorApplication: 'Major Application',
      recommenderInformation: 'Recommender Information',
      backgroundOfRecommender: 'Background of Recommender',
      activityInvolved: 'Activity Involved',

      userInfoTitle: 'User Info',
      dreamSchoolInfoTitle: 'Dream School Info',
      currentSchoolInfoTitle: 'Current School Info',

      starInstructions: 'Describe a story using the STAR principle:',
      situation: 'Situation: Give context or reason about what was happening.',
      task: 'Task: What was the goal or problem to be addressed?',
      action: 'Action: Specific steps taken to address the task or challenge.',
      result: 'Result: Outcome and achievement of the actions.',
    },
    major: {
      label: 'Major',
      placeholder: 'Type here...',
    },
    recommender: {
      firstName: {
        label: 'First Name',
        placeholder: 'Example: Samantha',
      },
      lastName: {
        label: 'Last Name',
        placeholder: 'Example: Wang',
      },
      relationship: {
        label: 'Relationship',
        placeholder: 'Mentor/Professor/Supervisor/Manager',
      },
      institution: {
        label: 'Institution',
        placeholder: 'University/Company',
      },
      position: {
        label: 'Position',
        placeholder: 'Specify the position or title of recommender',
      },
      phone: {
        label: 'Phone Number',
        placeholder: 'Contact number of the recommender',
      },
      email: {
        label: 'Email',
        placeholder: 'Samantha@gmail.com',
      },
      address: {
        label: 'Address',
        placeholder: 'Mailing address',
      },
      zipCode: {
        label: 'Zip Code',
        placeholder: 'Zip code for the address',
      },
    },
    intro: {
      label: 'Background of recommender',
      placeholder: 'Type here...',
    },
    activity: {
      label: 'Activity Involved',
      placeholder: 'Your story here...',
    },
    userInfo: {
      firstName: {
        label: 'First Name',
        placeholder: 'Enter your first name',
      },
      surname: {
        label: 'Surname',
        placeholder: 'Enter your surname',
      },
    },
    dreamSchoolInfo: {
      applySchool: {
        label: 'Applying School',
        placeholder: 'Enter the name of the school you are applying to',
      },
      applyProgram: {
        label: 'Applying Program',
        placeholder: 'Enter the name of the program you are applying for',
      },
      dreamDegree: {
        label: 'Dream Degree',
        placeholder: 'Enter the degree you aspire to achieve',
      },
      dreamUni: {
        label: 'Dream University',
        placeholder: 'Enter the name of your dream university',
      },
      dreamUniAddress: {
        label: 'Dream University Address',
        placeholder: 'Enter the address of your dream university',
      },
      dreamMajor: {
        label: 'Dream Major',
        placeholder: 'Enter the major you wish to study',
      },
      dreamCountry: {
        label: 'Dream Country',
        placeholder: 'Enter the country where you wish to study',
      },
    },
    currentSchoolInfo: {
      currentUni: {
        label: 'Current University',
        placeholder:
          'Enter the name of the university you are currently attending',
      },
      currentCountry: {
        label: 'Current Country',
        placeholder: 'Enter the country you are currently living in',
      },
      currentDegree: {
        label: 'Current Degree',
        placeholder: 'Enter the degree you are currently pursuing',
      },
      currentMajor: {
        label: 'Current Major',
        placeholder: 'Enter the major you are currently studying',
      },
      currentGPA: {
        label: 'Current GPA',
        placeholder: 'Enter your current GPA score',
      },
    },

    buttonLabel: 'Submit',
  },
  historyTexts: {
    remainingCounts: 'Remaining Counts: ',
    generateCountsHistory: 'Generate Counts History:',
    increment: 'increment',
    payment: 'payment',
    generate: 'generate',
    count: 'Count',
    time: 'Time',
    buttonBack: 'Back',
    coverletter: 'cover letter',
    recommendation: 'recommendation',
    pro: 'pro plan',
    superPro: 'super Pro plan',
    standard: 'standard plan',
  },
  resumeTxt: {
    personalInfo: {
      firstName: 'First Name',
      surname: 'Last Name',
      userTel: 'Phone Number',
      userEmail: 'Email',
      userLinkedln: 'userLinkedln',
    },
    dreamInfo: {
      dreamDegree: 'degree name',
      dreamUni: 'dream Uni name',
      dreamMajor: '',
      dreamCountry: '',
    },

    educationInfo: {
      currentUni: 'University',
      city: 'City',
      state: 'State',
      currentCountry: 'Country',
      currentDegree: 'Degree',
      currentMajor: 'Major',
      startDate: 'Start Date',
      endDate: 'Graduation Date',
      currentGPA: 'GPA',
      currentCourses: 'Courses',
      achievement: 'Achievement',
    },
    workExperience: {
      role: 'Position Title',
      groupName: 'Group Name',
      company: 'Company',
      city: 'City',
      state: 'State',
      country: 'Country',
      startDate: 'Start Date',
      endDate: 'End Date',
      workSummary: 'Work Summary',
      workDetail: 'Work Detail',
    },
    projectExperience: {
      getProject: 'Project Name',
      schoolName: 'College/Institution/Company',
      city: 'City',
      state: 'State',
      country: 'Country',
      startDate: 'Start Date',
      endDate: 'End Date',
      projectSummary: 'Project Summary',
      projectDetail: 'Project Details',
    },
    researchExperience: {
      researchTitle: 'Research Title',
      schoolName: 'College/Institution/Company',
      city: 'City',
      state: 'State',
      country: 'Country',
      startDate: 'Start Date',
      endDate: 'End Date',
      researchSummary: 'Research Summary',
      researchDetail: 'Research Details',
    },
    publicationsPresentations: {
      getConference: 'Publications and Presentations',
    },
    skillsActivitiesInterests: {
      language: 'Language 1,Language 2',
      getSkills: 'Skills',
      relevantCertificates: 'Certificates',
      volunteerWork: 'Volunteer Work',
      interest: 'Interests',
      getAwards: 'Awards and Honors',
      getCompetitions: 'Competitions',
    },
    interface: {
      saveButton: 'Save Data',
      downloadButton: 'Download',
    },
  },
  chooseTemplate: {
    title: 'Current template',
    templateName: 'Style',
  },
  tips: {
    dataNotSaved: 'Data is not saved, please try it later.',
    fillIn: 'Please fill in the following required fields',
    fillInSingle: 'Please fill in the required field',
    sendDatatoBackSuccess: 'Data is sent to the back-end successfully',
    success: 'Success',
    error: 'Error',
    warn: 'Warning',
    required: 'is required',
  },
  AboutUsPage: {
    pageTitle: 'Who Are We?',
    studyingAbroadTitle: 'Studying Abroad',
    studyingAbroadParagraph:
      "Hey, buddies! I'm Molly, your study abroad assistant! 🎓 Here, you can get everything about studying in Germany. From the details of university applications to admission criteria, from application documents to university course guides, to overseas job hunting! 💼 We'll be with you throughout your study abroad journey! 🌟",
    jobMentoringTitle: 'Career Mentoring',
    jobMentoringParagraph1:
      '🔍 Recommendation Letter: [Optimize personal experiences] + [Highlight professional skills and research abilities]',
    jobMentoringParagraph2:
      '🔍 Resume: [Structured design] + [Enhance professional adaptability]',
    jobMentoringParagraph3:
      '🔍 Statement of Purpose: [Integrate career and academic plans] + [Personalized statements]',
    footLine: '🔍 Get visa documents done in one click! ✈️',
  },
  services: {
    studyingAbroad: {
      title: 'University Applications',
      details: [
        '🥇 Detailed university application process',
        '🥇 Introduction to universities & majors',
        '🥇 Admission criteria, graduation requirements, etc.',
      ],
      moreLink: 'Learn More',
    },
    community: {
      title: 'Study Abroad Community',
      details: [
        '🔥 Join study abroad application community',
        '🔥 Regular Q&A live streams, overseas job hunting sharing',
        '🔥 Overseas life',
      ],
      moreLink: 'Learn More',
    },
    visa: {
      title: 'Visa Applications',
      details: [
        '🥇 Visa application requirements, study work visas',
        '🥇 Proof of financial resources',
        '🥇 Medical insurance',
      ],
      moreLink: 'Learn More',
    },
  },
  button: {
    save: 'Save Data',
  },
  login: {
    title: 'Login',
    subTitle: 'Sign in to continue',
    emailLabel: 'EMAIL',
    passwordLabel: 'PASSWORD',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    loginButton: 'Log in',
    or: 'Or',
    registerNow: 'register now!',
    emailPlaceholder: 'Email', // 假设这是占位符文本
    passwordPlaceholder: 'Password', // 假设这是占位符文本
    passwordRequiredMessage: 'Please input your Password!', // 表单验证消息
  },
  register: {
    title: 'Create New Account',
    backToLogin: 'Already registered? ',
    emailLabel: 'EMAIL',
    passwordLabel: 'PASSWORD',
    confirmPasswordLabel: 'CONFIRM',
    newPasswordPlaceholder: 'New Password',
    confirmPasswordPlaceholder: 'Confirm Password',
    verificationCodePlaceholder: 'Verification code',
    verificationCodeInfo:
      'Please input the Verification code you got from Email!',
    captchaButton: 'Get Captcha',
    signUpButton: 'Sign up',
    emailTip: 'Please input your Email!',
    passwordTip: 'Please input your Password',
  },
};

export default texts_en;
