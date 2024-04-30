import * as Yup from 'yup';

//表单规则
const validationSchemaObj = {
  firstName: Yup.string().required('First Name is required'),
  surname: Yup.string().required('Sur Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('First Name is required'),
};

export const validationSchema = Yup.object().shape(validationSchemaObj);

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
        schema: true,
      },
      surname: {
        ...userInfo.surname,
        name: 'surname',
        schema: true,
      },
    },
    dreamSchoolInfo: {
      dreamDegree: {
        ...dreamSchoolInfo.dreamDegree,
        name: 'dreamDegree',
        schema: false,
      },
      dreamUni: {
        ...dreamSchoolInfo.dreamUni,
        name: 'dreamUni',
        schema: false,
      },
      dreamUniAddress: {
        ...dreamSchoolInfo.dreamUniAddress,
        name: 'dreamUniAddress',
        schema: false,
      },
      dreamMajor: {
        ...dreamSchoolInfo.dreamMajor,
        name: 'dreamMajor',
        schema: false,
      },
      dreamCountry: {
        ...dreamSchoolInfo.dreamCountry,
        name: 'dreamCountry',
        schema: false,
      },
    },
    currentSchoolInfo: {
      currentUni: {
        ...currentSchoolInfo.currentUni,
        name: 'currentUni',
        schema: false,
      },
      currentCountry: {
        ...currentSchoolInfo.currentCountry,
        name: 'currentCountry',
        schema: false,
      },
      currentDegree: {
        ...currentSchoolInfo.currentDegree,
        name: 'currentDegree',
        schema: false,
      },
      currentMajor: {
        ...currentSchoolInfo.currentMajor,
        name: 'currentMajor',
        schema: false,
      },
      currentGPA: {
        ...currentSchoolInfo.currentGPA,
        name: 'currentGPA',
        schema: false,
      },
    },
    recommender: {
      firstName: {
        ...recommender.firstName,
        name: 'recommenderFirstName',
        schema: false,
      },
      lastName: {
        ...recommender.lastName,
        name: 'recommenderLastName',
        schema: false,
      },
      relationship: {
        ...recommender.relationship,
        name: 'recommenderRelationship',
        schema: false,
      },
      institution: {
        ...recommender.institution,
        name: 'recommenderInstitution',
        schema: false,
      },
      position: {
        ...recommender.position,
        name: 'recommenderPosition',
        schema: false,
      },

      email: {
        ...recommender.email,
        name: 'recommenderEmail',
        schema: true,
      },
    },
    intro: {
      ...intro,
      name: 'recommenderIntro',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: false,
    },
    activity: {
      ...activity,
      name: 'recommenderActivity',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: false,
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
