import { useNavigate } from 'react-router-dom';
import { editState } from '../../../../utils/checkCache';
import RecommendationForm from './RecommendationForm';
import { checkLogin } from '../../../../utils/checkLogin';
import { createRecommendation } from '../../../../utils/api';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getRecommendation,
  getRecommendation_MOCK,
} from '../../../../utils/api';
import { LoadingIndicator } from '../../../../components/Loading';
import { initialValues } from './FormData';

//整个推荐信表单
const RecommendationFormLogic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(initialValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchNewData = async () => {
    const response = await getRecommendation_MOCK();
    console.log(response);
    if (response) {
      setIsLoading(false);
      if (response.data.msg) {
        setFormData(response.data.msg);
      }
    }
  };

  useEffect(() => {
    // 检查登录状态,未登录先去登录
    // const checkLoginAndDataFetch = async () => {
    //   try {
    //     const checkRes = await checkLogin();
    //     if (!checkRes) {
    //       // navigate(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`)
    //       navigate('/login');
    //       // console.log(window.location
    //     } else {
    //       // 验证用户身份后获取最新数据
    //       fetchNewData();
    //     }
    //   } catch (error) {
    //     // 处理错误
    //     console.error('Error during checkLogin:', error);
    //   }
    // };
    // checkLoginAndDataFetch();
    fetchNewData();
  }, [dispatch]); // 依赖 dispatch 函数

  const handleToNext = async (values) => {
    console.log('Form submitted with values:', values);
    //mock data
    // const response = { status: 200 };

    //调用生成pdf api
    const response = await createRecommendation(values);
    console.log(response);
    if (response.status === 200) {
      editState('isEditrecommendation', false);
      navigate('/layout/Recommendation/generate');
    } else if (response.status === 401) {
      navigate('/login');
    } else {
      //错误提示
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator isLoading={true} />
      ) : (
        <RecommendationForm onSubmit={handleToNext} initialValues={formData} />
      )}
    </div>
  );
};

export default RecommendationFormLogic;
