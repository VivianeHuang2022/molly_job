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

//当fetchData没有有效值的时候使用initialValues
export const initialValues = {
  //recommender special value
  recommenderFirstName: '',
  recommenderLastName: '',
  recommenderPosition: '',
  recommenderInstitution: '',
  recommenderEmail: '',
  recommenderIntro: '',
  recommenderRelationship: '',
  recommenderActivity: '',

  //from other part
  firstName: '',
  surname: '', //按照最初的coverletter沿用的名字,如果要统一命名要一起修改对其

  dreamDegree: '',
  dreamUni: '',
  dreamUniAddress: '',
  dreamMajor: '',
  dreamCountry: '',

  currentUni: '',
  currentCountry: '',
  currentDegree: '',
  currentMajor: '',
  currentGPA: '',
};
