const texts ={
    startTexts:{
        pageTitle:"欧洲留学 or 欧洲求职？",
        studyingAbroadTitle:"留学",
        studyingAbroadParagraph:"生成你的留学简历和求职信（例如大学入学、奖学金申请等）。",
        jobMentoringTitle:"职业辅导",
        jobMentoringParagraph1:"1对1模拟面试",
        jobMentoringParagraph2:"专业简历制作",
        jobMentoringParagraph3:"职业求职信撰写",
        footLine:"展示你的资质、经历、目标与成就"
    },
    homeTexts:{
        studyTitle:"你的大学指南",
        careerTitle:"你的职业指南",
        applicationTxt:"申请指南",
        interviewTxt:"面试模拟",
        coverletterTxt:"动机信",
        resumeTxt:"简历",
        uniGuidTxt:"大学向导",
        matchTxt:"匹配",
    },
    modalTexts:{
        title:"输入你的信息来聊聊吧！",
        interviewTitle:"开启模拟面试！",
        uploadTitle:"上传简历",
        interviwContent:"通过这次模拟面试，我们将通过模拟特定的面试场景，针对你的求职岗位，突出核心优势和并会给出针对性的求职建议。",
        uploadContent:"通过简历，我们通过你的个人经历，使用数字和案例去量化，突出你的个人成就、技能和资质，争取面试机会。"
    },
    QuestionP:{
        back:"返回",
        next:"下一页"
    },
    GeberalQ:{
        JobPage:{
            Page1:{
                Q_title:"你期望申请什么工作",
                D_Title:"期望职位*",
                D_Title_PH:"软件开发工程师",
                D_Company:"期望公司*",
                D_Company_PH:"Meta",
                D_Description:"工作描述*",
                D_Description_PH:"在Google的SDE角色的工作描述通常包括设计、开发和维护软件应用程序，参与代码审查，与跨功能团队合作，以及为整个软件开发生命周期做出贡献。"
            },
            Page2:{
                Q_title:"你最近的工作是什么",
                R_Title:"职位*",
                R_Title_PH:"软件开发工程师(SDE)",
                R_Company:"公司*",
                R_Company_PH:"Google",
                R_Description:"主要职责*",
                R_Description_PH:" - 设计和开发软件解决方案。\n- 与产品经理、设计师和其他工程师合作。\n - 参与代码审查并提供反馈。\n- 调试和解决软件缺陷。\n- 维护和改进现有软件系统。\n- 为确保改进符合性能目标而进行严格的测试和基准测试。"
            },
            Page3:{
                Q_title:"选出你的最厉害的三种技能",
                TOP1:"第一",
                TOP1_PH:"分析能力",
                TOP2:"第二",
                TOP2_PH:"注重细节",
                TOP3:"第三",
                TOP3_PH:"战略性",
                Skills:[['Python', 'Java', 'C++'], ['敏捷、Scrum', '版本控制'], 
                ['Web开发', '数据库SQL', '数据结构'], 
                ['计算机视觉', '自然语言处理算法']]
            },
            Page4:{
                Q_title:"你最大的成就是什么",
                Q_Backgrund:"讲讲你的职业背景",
                Q_Backgrund_PH:"该项目涉及优化高流量的Web应用程序的性能。",
                Q_Action:"你是如何成功的（采取的行动）",
                Q_Action_PH:"- 比如：对现有代码库进行彻底分析，并识别性能瓶颈。\n- 制定详细的代码重构和优化策略。\n- 领导一个由五名工程师组成的团队，实施变更并与其他团队协调，以最小化干扰。\n- 实施严格的测试和基准测试，确保改进达到性能目标。",
                Q_Result:"你取得了怎样的成就？*",
                Q_Result_PH:"比如：该项目提前两周完成，应用程序的响应时间提高了20%，用户满意度提高，服务器成本降低。"
            },
            Page5:{
                Q_title:"你有多少年的工作经验？*",
                Q_Notification:"实习和非正式工作也可以包括在内。"
            }    
        },
        StdPage:{
            PgaeTitle:"回答问题，生成你的大学申请动机信",
            Page1:{
                P1Q1:"你梦想留学的国家是？",
                P1Q1_PH:"德国",
                P1Q1_Options:["*美国","*德国","*澳大利亚","*丹麦","*比利时","*..."],
                P1Q2:"你梦想的大学是哪一所？",
                P1Q2_PH:"柏林工业大学",
                P1Q2_Options:["*柏林工业大学","*慕尼黑工业大学","*德累斯顿工业大学","*亚琛工业大学","*汉诺威工业大学","*..."],
                P1Q3:"你打算申请什么学位？",
                P1Q3_PH:"硕士"
            },
            Page2:{
                P2Q1:"你为什么对该大学学习感兴趣？",
            },
            Page3:{
                P3Q1:"你的学术背景是什么，它与你申请的专业有什么联系？",
            },
            Page4:{
                P4Q1:"你能提供你学术或研究成就的例子（比如期刊，小组项目，竞赛等），证明你在该专业取得成功的潜力吗？（没有可不填）",
            },
             Page5:{
                P5Q1:"你具备哪些相关经验和技能（如工作实习经验，志愿者经验），使你成为该专业领域里不错的候选人？",
            },
            Page6:{
                P6Q1:"你的学术兴趣与该专业的课程相匹配吗？",
            },
            Page7:{
                P7Q1:"你的长期职业目标是什么，这个项目在哪些方面符合你的职业规划？",
            },
            Page8:{
                P8Q1:"你具备哪些语言能力（如英语德语法语），并且你参加过语言能力测试吗？",
            },
            Page22:{
                P2Q1:"你现在居住在哪里？",
                P2Q1_Options:["*北京","*武汉","*上海","*南京","*广州","*..."],
                P2Q2:"你在哪所大学学习？",
                P2Q2_Options:["*武汉大学","*北京大学","*上海交通大学","*清华大学","*南京大学","*..."],
            },
            Page33:{
                P3Q1:"你想申请什么专业？",
                P3Q1_Options:["*电气自动化","*机械工程","*电气工程","*计算机工程","*软件工程","*..."],
                P3Q2:"你想申请什么学位？",
                P3Q2_Options:["*学士","*硕士","*博士"],
            },
            Page44:{
                P4Q1:"你现在的专业是什么？",
                P4Q1_Options:["*电气自动化","*机械工程","*电气工程","*计算机工程","*软件工程","*..."],
                P4Q2:"你目前的最高学位是什么？",
                P4Q2_Options:["*学士","*硕士","*博士","*..."],
            }
        }
        
    }

}

export default texts




