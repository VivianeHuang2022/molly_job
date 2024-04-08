import React from 'react';
import { useNavigate } from 'react-router-dom';
import { editState } from '../../../../utils/checkCache';
import RecommendationForm from './RecommendationForm';
import * as Yup from 'yup';

import { validationSchemaContent, initialValues } from './FormData';
import { createRecommendation } from '../../../../utils/api';

const validationSchema = Yup.object().shape(validationSchemaContent);

// 业务逻辑组件
const RecommendationFormLogic = () => {
  const navigate = useNavigate();

  const handleToNext = async (values) => {
    //mock data
    // const response = { status: 200 };

    //调用生成pdf api
    const response = await createRecommendation(values);

    if (response.status === 200) {
      console.log('Form submitted with values:', values);

      editState('isEditrecommendation', false);
      navigate('/layout/Recommendation');
    } else {
      //错误提示
    }
  };

  return (
    <div>
      <RecommendationForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleToNext}
      />
    </div>
  );
};

export default RecommendationFormLogic;
