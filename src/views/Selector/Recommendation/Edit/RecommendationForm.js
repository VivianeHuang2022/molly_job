import { Formik, Form } from 'formik';
import React, { useState, useContext } from 'react';
import styles from './Recommendation.module.css';
import { getLabels } from '../../../local';
import { FormSingle, FormGroup, StarInstructions } from './FormComps';
import { PrimaryButton, DefaultButton } from '../../../../components/Button';
import { NoticeParagraphComp } from '../../../../components/Typography';
import AlertContext from '../../../../components/AlertProvider/AlertContext';

import { getFormFields, requiredFields, getValidationSchema } from './FormData';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';
import { saveLocalEdit } from '../../../../utils/saveLocalData';

const RecommendationFormUI = ({
  goToGenerate,
  initialValues,
  sendDatatoBack,
  topicId,
  apiMessage,
}) => {
  const { showAlertMessage } = useContext(AlertContext);
  const [message, setMessage] = useState('');
  const texts = getLabels(useSelector(selectCurrentLanguage));

  const { formFields } = getFormFields(texts);
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
      <div className={styles.apiMessage}>
        {apiMessage && <NoticeParagraphComp>{apiMessage}</NoticeParagraphComp>}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(texts)}
      >
        {({ values, errors, touched, isSubmitting }) => {
          const saveData = async (values, errors) => {
            // 检查是否有必填字段未填写
            const missingFields = requiredFields.filter(
              (field) => !values[field]
            );
            if (missingFields.length > 0) {
              const missingLabels = missingFields.map((field) => {
                const { requiredLabels } = getFormFields(texts);

                const fieldLabel = requiredLabels[field];
                return fieldLabel || field;
              });

              showAlertMessage(texts.tips.error, texts.tips.fillIn, 'error');

              setMessage(`${texts.tips.fillIn} : ${missingLabels?.join(', ')}`);
              return false;
            } else {
              setMessage('');
            }

            // 存储表单的值到缓存
            saveLocalEdit('recommendation', values);

            try {
              const isSaved = await sendDatatoBack(values);
              if (isSaved) {
                // 创建一个 Intl.DateTimeFormat 实例，使用默认的浏览器本地设置
                const formatter = new Intl.DateTimeFormat();

                // 获取格式化的日期时间字符串
                const formattedDate = new Date().toLocaleString();

                // 获取语言标签，例如 "en-US" 或 "zh-CN"
                const locale = formatter.resolvedOptions().locale;
                setMessage(
                  `${texts.tips.sendDatatoBackSuccess} ${formattedDate},${locale}`
                );
              }
              return true;
            } catch (error) {
              console.error(error);
              setMessage(
                error.message || 'An error occurred while saving data.'
              );
              return false;
            }
          };
          const handleSubmit = async (values, errors) => {
            try {
              // 等待saveData完成
              const isSaved = await saveData(values, errors);

              console.log('是否成功向后台提交数据', isSaved);
              if (isSaved) {
                goToGenerate();
              }
            } catch (error) {
              // 处理可能发生的错误
              console.error('保存数据时出错:', error);
            }
          };
          return (
            <Form className={styles.form}>
              {/* 确认个人信息 */}
              <h1>{title.personalInfo}:</h1>
              <FormGroup
                formGroup={userInfo}
                title={userInfoTitle}
                registerRef={registerRef}
                handleKeyDown={handleKeyDown}
              />

              {/* 学生展示学校信息 */}
              {topicId === '1' && (
                <>
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
                </>
              )}

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

              <div className={styles.message}>
                {message && (
                  <NoticeParagraphComp>{message}</NoticeParagraphComp>
                )}
              </div>

              <div className={styles.buttonContainer}>
                <DefaultButton
                  label={texts.button.save}
                  onClick={() => saveData(values, errors)}
                />

                <PrimaryButton
                  label={buttonLabel}
                  onClick={() => handleSubmit(values, errors)}
                />
              </div>

              {/*  由于antd用了已被弃用的findDOMNode导致会报错提示,要么保留报错等待antd团队修复bug;要么用普通的button 改样式也可以解决*/}
              {/* <div className={styles.buttonContainer}>
                <button onClick={() => saveData(values, errors)} type="button">
                  save data
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit(values, errors)}
                >
                  {buttonLabel}
                </button>
              </div> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecommendationFormUI;
