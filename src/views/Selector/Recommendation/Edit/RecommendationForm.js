import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Input } from 'antd';
import styles from './Recommendation.module.css';
import { getLabels } from '../../../local';

import { getFormFields } from './FormData';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';
import * as Yup from 'yup';



const { TextArea } = Input;

const RecommendationFormUI = ({ initialValues, onSubmit }) => {
  const texts = getLabels(useSelector(selectCurrentLanguage));

  const formFields = getFormFields(texts);

  const { sectionTitle, buttonLabel } = texts.recommendation;
  const { major, recommender, intro, activity } = formFields;

  const {
    majorApplication,
    recommenderInformation,
    backgroundOfRecommender,
    activityInvolved,
  } = sectionTitle;

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
  const validationSchema = Yup.object().shape(validationSchemaObj);

 

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <FormSingle form={major} title={majorApplication} />
            <FormGroup
              formGroup={recommender}
              tltle={recommenderInformation}
              sectionTitle={sectionTitle}
            />
            <FormSingle form={intro} title={backgroundOfRecommender} />
            <FormSingle
              form={activity}
              title={activityInvolved}
              instruction={StarInstructions}
              sectionTitle={sectionTitle}
            />

            <button type="submit">{buttonLabel}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const FormGroup = ({ formGroup, sectionTitle }) => {
  const fields = Object.keys(formGroup).map((key) => {
    const item = formGroup[key];
    return (
      <div key={key} id={key}>
        <SingleField {...item} />
      </div>
    );
  });
  return (
    <div>
      <Section title={sectionTitle.recommenderInformation} />
      <div className={styles.recommenderInfo}>{fields}</div>
    </div>
  );
};

const FormSingle = ({ instruction, form, title, sectionTitle }) => {
  return (
    <div>
      <Section title={title} />
      {instruction && <StarInstructions sectionTitle={sectionTitle} />}
      <SingleField {...form} />
    </div>
  );
};

const SingleField = ({ label, component, ...props }) => {
  const [field, meta] = useField(props);
  const CustomField =
    component === 'textarea' ? (
      <TextArea {...field} {...props} />
    ) : (
      <Input {...field} {...props} />
    );

  return (
    <>
      <div>
        {label}
        {CustomField}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default RecommendationFormUI;

//共用section
const Section = ({ title }) => (
  <div>
    <h4>{title}</h4>
  </div>
);

//页面组件

const StarInstructions = ({ sectionTitle }) => {
  return (
    <div className={styles.instructions}>
      <h4>{sectionTitle.starInstructions}</h4>
      <ul>
        <li>{sectionTitle.situation}</li>
        <li>{sectionTitle.task}</li>
        <li>{sectionTitle.action}</li>
        <li>{sectionTitle.result}</li>
      </ul>
    </div>
  );
};
