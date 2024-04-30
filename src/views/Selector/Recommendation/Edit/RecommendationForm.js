import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import styles from './Recommendation.module.css';
import { getLabels } from '../../../local';
import { FormSingle, FormGroup, StarInstructions } from './FormComps';
import { PrimaryButton, DefaultButton } from '../../../../components/Button';

import { getFormFields, validationSchema } from './FormData';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';

const RecommendationFormUI = ({
  onSubmit,
  initialValues,
  saveData,
  handleToNext,
}) => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const formFields = getFormFields(texts);
  const { sectionTitle, buttonLabel, title } = texts.recommendation;
  const {
    recommender,
    intro,
    activity,
    userInfo,
    dreamSchoolInfo,
    currentSchoolInfo,
  } = formFields;

  const {
    recommenderInformation,
    backgroundOfRecommender,
    activityInvolved,
    userInfoTitle,
    dreamSchoolInfoTitle,
    currentSchoolInfoTitle,
  } = sectionTitle;

  // 状态用于存储所有输入框的引用
  const [inputRefs, setInputRefs] = useState([]);

  // registerRef 函数用于收集输入框的引用
  const registerRef = (ref) => {
    setInputRefs((prevRefs) => {
      if (!prevRefs.some((r) => r.current === ref.current)) {
        return [...prevRefs, ref];
      }
      return prevRefs;
    });
  };

  const handleKeyDown = (event, ref) => {
    if (event.key === 'Enter') {
      const index = inputRefs.indexOf(ref);
      const nextIndex = (index + 1) % inputRefs.length;
      inputRefs[nextIndex].current.focus();
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values }) => {
          return (
            <Form className={styles.form}>
              {/* 确认学生个人信息 */}
              <h1>{title.personalInfo}:</h1>
              <FormGroup
                formGroup={userInfo}
                title={userInfoTitle}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />
              <FormGroup
                formGroup={dreamSchoolInfo}
                title={dreamSchoolInfoTitle}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />
              <FormGroup
                formGroup={currentSchoolInfo}
                title={currentSchoolInfoTitle}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />

              {/* 推荐人相关信息 */}
              <h1>{title.refereeInfo}:</h1>
              <FormGroup
                formGroup={recommender}
                title={recommenderInformation}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />
              <FormSingle
                form={intro}
                title={backgroundOfRecommender}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />
              <FormSingle
                form={activity}
                title={activityInvolved}
                instruction={StarInstructions}
                sectionTitle={sectionTitle}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />

              <div className={styles.buttonContainer}>
                <DefaultButton
                  label={'save data'}
                  onClick={() => saveData(values)}
                />
                <PrimaryButton
                  label={buttonLabel}
                  onClick={() => handleToNext(values)}
                  htmlType="submit"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecommendationFormUI;
