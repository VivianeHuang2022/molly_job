import * as Yup from 'yup';

// 定义表单字段
export const getFormFields = (texts) => {
  const { major, recommender, intro, activity } = texts.recommendation;

  return {
    major: {
      ...major,
      name: 'applyMajor',
      schema: Yup.string(),
    },
    recommender: {
      name: {
        ...recommender.name,
        name: 'recommenderName',
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
      phone: {
        ...recommender.phone,
        name: 'recommenderPhone',
        schema: Yup.string(),
      },
      email: {
        ...recommender.email,
        name: 'recommenderEmail',
        schema: Yup.string().email('Invalid email address'),
      },
      address: {
        ...recommender.address,
        name: 'recommenderAddress',
        schema: Yup.string(),
      },
      zipCode: {
        ...recommender.zipCode,
        name: 'recommenderZipCode',
        schema: Yup.string(),
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
      name: 'recommendActivity',
      component: 'textarea', // 标记为使用 TextArea 组件
      schema: Yup.string(),
    },
  };
};

// 定义表单的初始值
export const initialValues = {
  applyMajor: '',
  recommenderName: '',
  recommenderPosition: '',
  recommenderInstitution: '',
  recommenderPhone: '',
  recommenderEmail: '',
  recommenderAddress: '',
  recommenderZipCode: '',
  recommenderIntro: '',
  recommendRelationship: '',
  recommendActivity: '',
};
