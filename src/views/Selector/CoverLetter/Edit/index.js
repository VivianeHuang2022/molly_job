import React, { useContext } from 'react';

import { PrimaryButton } from '../../../../components/Button';
import styles from './page.module.css';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../../../components/AlertProvider/AlertContext';
import { editState } from '../../../../utils/checkCache';

const QuestionMock = () => {
  const navigate = useNavigate();
  const { showAlertMessage } = useContext(AlertContext);
  const handleToNext = async () => {
    //mock data
    const response = { status: 200 };

    //调用生成pdf api
    //const response = await createStdCoverLetter(data);

    if (response.status === 200) {
      editState('isEditcoverletter', false);
      navigate('/layout/coverletter/generate');
    } else {
      showAlertMessage(
        'Error',
        'Post data failed!, Please check your data!',
        'error'
      );
    }
  };

  return (
    <div className={styles.questionContainerOuter}>
      <div className={styles.questionContainer}>
        <h1>Question test</h1>
        <p>此处省略填写表格步骤,点击下面next按钮进入生成页面</p>
        <PrimaryButton label={'Next'} onClick={handleToNext} />
      </div>
    </div>
  );
};

export default QuestionMock;
