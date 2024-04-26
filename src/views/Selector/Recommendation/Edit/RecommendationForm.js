import { Formik, Form, useFormikContext } from 'formik';
import styles from './Recommendation.module.css';
import { getLabels } from '../../../local';
import { FormSingle, FormGroup, StarInstructions } from './FormComps';
import { PrimaryButton, DefaultButton } from '../../../../components/Button';

import { getFormFields, validationSchema } from './FormData';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';

const RecommendationFormUI = ({ onSubmit, initialValues, saveData }) => {
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

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(props) => (
          <Form className={styles.form}>
            {/* 确认学生个人信息 */}
            <h1>{title.personalInfo}:</h1>
            <FormGroup formGroup={userInfo} title={userInfoTitle} />
            <FormGroup
              formGroup={dreamSchoolInfo}
              title={dreamSchoolInfoTitle}
            />
            <FormGroup
              formGroup={currentSchoolInfo}
              title={currentSchoolInfoTitle}
            />

            {/* 推荐人相关信息 */}
            <h1>{title.refereeInfo}:</h1>
            <FormGroup formGroup={recommender} title={recommenderInformation} />
            <FormSingle form={intro} title={backgroundOfRecommender} />
            <FormSingle
              form={activity}
              title={activityInvolved}
              instruction={StarInstructions}
              sectionTitle={sectionTitle}
            />

            <div className={styles.buttonContainer}>
              <DefaultButton label={'save data'} onClick={saveData} />
              <PrimaryButton label={buttonLabel} htmlType="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecommendationFormUI;
