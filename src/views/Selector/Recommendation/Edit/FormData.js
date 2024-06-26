import * as Yup from 'yup';
import { getLabels } from '../../../local';

// 定义表单字段
export const getFormFields = (curLan) => {
  let texts;
  if (curLan) {
    texts = curLan;
  } else {
    texts = getLabels(localStorage.getItem('Lan'));
  }
  const {
    recommender,
    intro,
    activity,
    userInfo,
    dreamSchoolInfo,
    currentSchoolInfo,
  } = texts.recommendation;
  const requiredFields = [];
  const requiredLabels = {};

  const formFields = {
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

  // 遍历getFormFields的结果
  Object.values(formFields).forEach((categoryFields) => {
    Object.values(categoryFields).forEach((field) => {
      // 检查schema属性
      if (field.schema) {
        // 添加到requiredFields数组
        requiredFields.push(field.name);
        // 添加到requiredLabels对象，假设字段的值存储在value属性中
        requiredLabels[field.name] = field.label;
      }
    });
  });

  return { formFields, requiredLabels, requiredFields };
};

export const { requiredFields } = getFormFields();

// 为每个字段创建验证规则的函数,每个字段的报错也是这里写
const createValidationRule = (fieldName, curText) => {
  let texts;
  if (curText) {
    texts = curText;
  } else {
    texts = getLabels(localStorage.getItem('Lan'));
  }
  const { requiredLabels } = getFormFields(texts);

  return Yup.string().required(
    `${requiredLabels[fieldName]} ${texts.tips.required}`
  );
};

// 使用 reduce 方法从 requiredFields 数组生成 validationSchemaObj 对象
const validationSchemaObj = requiredFields.reduce((acc, field) => {
  acc[field] = createValidationRule(field);
  return acc;
}, {});

export const validationSchema = Yup.object().shape(validationSchemaObj);

export const getValidationSchema = (texts) => {
  return Yup.object().shape(
    requiredFields.reduce((acc, field) => {
      acc[field] = createValidationRule(field, texts);
      return acc;
    }, {})
  );
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
