import * as Yup from 'yup';

export const getRequiredLabels = (texts) => {
  const {
    recommender,
    intro,
    activity,
    userInfo,
    dreamSchoolInfo,
    currentSchoolInfo,
  } = texts.recommendation;

  //这里同时匹配了label和placeholder 后面调用的时候要加label
  return {
    //coverletter p1 value : dreamSchoolInfo
    dreamCountry: dreamSchoolInfo.dreamCountry,
    dreamUni: dreamSchoolInfo.dreamUni,
    dreamDegree: dreamSchoolInfo.dreamDegree,
    dreamMajor: dreamSchoolInfo.dreamMajor,
    //coverletter p2 value : currentSchoolInfo
    currentDegree: currentSchoolInfo.currentDegree,
    currentMajor: currentSchoolInfo.currentMajor,
    currentUni: currentSchoolInfo.currentUni,
    currentCountry: currentSchoolInfo.currentCountry,
    //coverletter p5 value : userInfo
    firstName: userInfo.firstName,
    surname: userInfo.surname,
    //only recommender : recommender
    recommenderIntro: recommender.intro,
    recommenderPosition: recommender.position,
    recommenderInstitution: recommender.institution,
    recommenderRelationship: recommender.relationship,
    recommenderActivity: recommender.activity,
    recommenderFirstName: recommender.firstName,
    recommenderLastName: recommender.lastName,
  };
};

export const requiredFields = [
  //coverletter p1 value
  'dreamCountry',
  'dreamUni',
  'dreamDegree',
  'dreamMajor',

  //coverletter p2 value
  'currentDegree',
  'currentMajor',
  'currentUni',
  'currentCountry',

  //coverletter p5 value
  'firstName',
  'surname',

  //only recommender
  'recommenderFirstName',
  'recommenderLastName',
  'recommenderRelationship',

  'recommenderInstitution',
  'recommenderPosition',
  'recommenderIntro',
  'recommenderActivity',
];

// 为每个字段创建验证规则的函数
const createValidationRule = (fieldName) => {
  return Yup.string().required(`${fieldName} is required`);
};

// 使用 reduce 方法从 requiredFields 数组生成 validationSchemaObj 对象
const validationSchemaObj = requiredFields.reduce((acc, field) => {
  acc[field] = createValidationRule(field);
  return acc;
}, {});

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
        schema: true,
      },
      dreamUni: {
        ...dreamSchoolInfo.dreamUni,
        name: 'dreamUni',
        schema: true,
      },
      dreamUniAddress: {
        ...dreamSchoolInfo.dreamUniAddress,
        name: 'dreamUniAddress',
        schema: false,
      },
      dreamMajor: {
        ...dreamSchoolInfo.dreamMajor,
        name: 'dreamMajor',
        schema: true,
      },
      dreamCountry: {
        ...dreamSchoolInfo.dreamCountry,
        name: 'dreamCountry',
        schema: true,
      },
    },
    currentSchoolInfo: {
      currentUni: {
        ...currentSchoolInfo.currentUni,
        name: 'currentUni',
        schema: true,
      },
      currentCountry: {
        ...currentSchoolInfo.currentCountry,
        name: 'currentCountry',
        schema: true,
      },
      currentDegree: {
        ...currentSchoolInfo.currentDegree,
        name: 'currentDegree',
        schema: true,
      },
      currentMajor: {
        ...currentSchoolInfo.currentMajor,
        name: 'currentMajor',
        schema: true,
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
        schema: true,
      },
      lastName: {
        ...recommender.lastName,
        name: 'recommenderLastName',
        schema: true,
      },
      relationship: {
        ...recommender.relationship,
        name: 'recommenderRelationship',
        schema: true,
      },
      institution: {
        ...recommender.institution,
        name: 'recommenderInstitution',
        schema: true,
      },
      position: {
        ...recommender.position,
        name: 'recommenderPosition',
        schema: true,
      },

      email: {
        ...recommender.email,
        name: 'recommenderEmail',
        schema: false,
      },
    },
    intro: {
      ...intro,
      name: 'recommenderIntro',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: true,
    },
    activity: {
      ...activity,
      name: 'recommenderActivity',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: true,
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
