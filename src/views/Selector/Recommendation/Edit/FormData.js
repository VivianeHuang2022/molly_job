import { getLabels } from '../../../local';
import * as Yup from 'yup';

const { major, recommender, intro, activity } = getLabels().recommendation;

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

// 定义表单字段
export const formFields = {
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

//表单规则
const validationSchemaObj = {};
for (const fieldName in formFields) {
  if (Object.prototype.hasOwnProperty.call(formFields, fieldName)) {
    const field = formFields[fieldName];
    if (Object.prototype.hasOwnProperty.call(field, 'schema')) {
      validationSchemaObj[field.name] = field.schema;
    } else {
      for (const subFieldName in field) {
        if (
          Object.prototype.hasOwnProperty.call(field[subFieldName], 'schema')
        ) {
          validationSchemaObj[field[subFieldName].name] =
            field[subFieldName].schema;
        }
      }
    }
  }
}
export const validationSchemaContent = validationSchemaObj;
