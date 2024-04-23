import React from 'react';
import { useNavigate } from 'react-router-dom';
import { editState } from '../../../../utils/checkCache';
import RecommendationForm from './RecommendationForm';
import { checkLogin } from "../../../../utils/checkLogin";
import { createRecommendation } from '../../../../utils/api';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecommendData } from '../../../../redux/actions/fetcDataActions';

// 业务逻辑组件
const RecommendationFormLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToNext = async (values) => {
    //console.log('Form submitted with values:', values);
    //mock data
    // const response = { status: 200 };

    //调用生成pdf api
    const response = await createRecommendation(values);
    console.log(response)
    if (response.status === 200) {
      editState('isEditrecommendation', false);
      navigate('/layout/Recommendation/generate');
    } else if(response.status === 401){
      navigate("/login")
    }
    else{
      //错误提示
    }
  };

  useEffect(() => {
    const checkRes = checkLogin();
    checkRes.then(result=>{
    if(!result){
      // navigate(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`)
      navigate("/login")
      // console.log(window.location)
    }
    })
    // 在组件加载时触发异步 action
    dispatch(fetchRecommendData());

    // 如果有其他依赖条件，你可以在这里添加
  }, [dispatch]); // 依赖 dispatch 函数

  return (
    <div>
      <RecommendationForm onSubmit={handleToNext} />
    </div>
  );
};

export default RecommendationFormLogic;
