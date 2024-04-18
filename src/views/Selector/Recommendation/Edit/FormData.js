import * as Yup from 'yup';

// 定义表单字段
export const getFormFields = (texts) => {
  const {
    recommender,
    intro,
    activity,
    userInfo,
    dreamSchoolInfo,
    currentSchoolInfo,
  } = texts.recommendation;

  return {
    userInfo: {
      firstName: {
        ...userInfo.firstName,
        name: 'firstName',
        schema: Yup.string(),
      },
      surname: {
        ...userInfo.surname,
        name: 'surname',
        schema: Yup.string(),
      },
    },
    dreamSchoolInfo: {
      dreamDegree: {
        ...dreamSchoolInfo.dreamDegree,
        name: 'dreamDegree',
        schema: Yup.string(),
      },
      dreamUni: {
        ...dreamSchoolInfo.dreamUni,
        name: 'dreamUni',
        schema: Yup.string(),
      },
      dreamUniAddress: {
        ...dreamSchoolInfo.dreamUniAddress,
        name: 'dreamUniAddress',
        schema: Yup.string(),
      },
      dreamMajor: {
        ...dreamSchoolInfo.dreamMajor,
        name: 'dreamMajor',
        schema: Yup.string(),
      },
      dreamCountry: {
        ...dreamSchoolInfo.dreamCountry,
        name: 'dreamCountry',
        schema: Yup.string(),
      },
    },
    currentSchoolInfo: {
      currentUni: {
        ...currentSchoolInfo.currentUni,
        name: 'currentUni',
        schema: Yup.string(),
      },
      currentCountry: {
        ...currentSchoolInfo.currentCountry,
        name: 'currentCountry',
        schema: Yup.string(),
      },
      currentDegree: {
        ...currentSchoolInfo.currentDegree,
        name: 'currentDegree',
        schema: Yup.string(),
      },
      currentMajor: {
        ...currentSchoolInfo.currentMajor,
        name: 'currentMajor',
        schema: Yup.string(),
      },
      currentGPA: {
        ...currentSchoolInfo.currentGPA,
        name: 'currentGPA',
        schema: Yup.string(),
      },
    },
    recommender: {
      firstName: {
        ...recommender.firstName,
        name: 'recommenderFirstName',
        schema: Yup.string(),
      },
      lastName: {
        ...recommender.lastName,
        name: 'recommenderLastName',
        schema: Yup.string(),
      },
      relationship: {
        ...recommender.relationship,
        name: 'recommenderRelationship',
        schema: Yup.string(),
      },
      institution: {
        ...recommender.institution,
        name: 'recommenderInstitution',
        schema: Yup.string(),
      },
      position: {
        ...recommender.position,
        name: 'recommenderPosition',
        schema: Yup.string(),
      },

      email: {
        ...recommender.email,
        name: 'recommenderEmail',
        schema: Yup.string().email('Invalid email address'),
      },
    },
    intro: {
      ...intro,
      name: 'recommenderIntro',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: Yup.string(),
    },
    activity: {
      ...activity,
      name: 'recommenderActivity',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: Yup.string(),
    },
  };
};


