import { useLocation, useNavigate } from 'react-router-dom';
import { editState } from '../../../../utils/checkCache';
import RecommendationForm from './RecommendationForm';
import { checkLogin } from '../../../../utils/checkLogin';
import { updateRecommendation } from '../../../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getRecommendation,
  getRecommendation_MOCK,
} from '../../../../utils/api';
import { LoadingIndicator } from '../../../../components/Loading';
import { initialValues } from './FormData';
import { selectCurrentTopicId } from '../../../../redux/slices/userTypeSlice';
import { logTime } from '../../../../utils/time';

//整个推荐信表单
const RecommendationFormLogic = () => {
  const topicId = useSelector(selectCurrentTopicId);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(initialValues);
  const [apiMessage, setApiMessage] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAndCompareData = async () => {
    try {
      const localSaved = JSON.parse(
        localStorage.getItem(`recommendation_localEdit${topicId}`)
      );
      const response = await getRecommendation(topicId);
      if (!response) {
        //未获成功链接后台提示:未获取到最新后台数据,请刷新重试
        setApiMessage('not get new data from backend, please try it later');
        // 没有获取到后端数据，无法获取更新的数据
        if (localSaved) {
          console.log('没有获取到后端数据,但有缓存');
          console.log(localSaved);
          setFormData(localSaved.data);
        } else {
          console.log('没有获取到后端数据,也没有缓存', formData);
        }
      } else {
        //成功获取到后端数据则消除apiMessage提示
        setApiMessage('');
        // Step 1: 检查后端响应是否有有效值
        if (response && response.data.msg.timeStamp) {
          // console.log('存在后端有效值');
          // Step 2: 如果后端响应中有有效值且更新了，比较时间戳
          if (localSaved) {
            if (response.data.msg.timeStamp > localSaved?.timeStamp) {
              console.log('后台数据更新,用后台数据', response.data.msg);
              logTime(response.data.msg.timeStamp, localSaved?.timeStamp);

              //后台数据更新,用后台数据
              setFormData(response.data.msg);
            } else {
              //后台数据没更新，用本地数据
              if (localSaved?.data) {
                console.log('本地数据更新,用本地数据', localSaved.data);

                logTime(response.data.msg.timeStamp, localSaved?.timeStamp);
                setFormData(localSaved.data);
              }
            }
          } else {
            //存在有效后端数据,没有本地缓存,直接使用后端数据
            setFormData(response.data.msg);
          }
        } else {
          // 后端响应中没有有效值，无法获取更新的数据
          if (localSaved) {
            console.log('后端没有有效值,但有缓存');
            console.log(localSaved);
            setFormData(localSaved.data);
          } else {
            console.log('后端没有有效值,也没有缓存', formData);
            setFormData(initialValues);
          }
        }
      }
    } catch (error) {
      // 处理错误情况
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 检查登录状态,未登录先去登录
    const checkLoginAndDataFetch = async () => {
      try {
        const checkRes = await checkLogin();
        if (!checkRes) {
          navigate(`/login?returnUrl=${encodeURIComponent(location.pathname)}`);
        } else {
          // 验证用户身份后获取最新数据
          fetchAndCompareData();
        }
      } catch (error) {
        // 处理错误
        console.error('Error during checkLogin:', error);
      }
    };
    checkLoginAndDataFetch();
    //fetchAndCompareData();
  }, [dispatch, topicId]); // 依赖 dispatch 函数

  //在编辑页面只向后端存数据,不会接生成文档的api,在生成页消耗次数后才会createRecommendation
  const sendDatatoBack = async (values) => {
    try {
      values.timeStamp = new Date().getTime();
      console.log(values);
      const response = await updateRecommendation(values, topicId);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const goToGenerate = () => {
    editState('isEditrecommendation', false);
    navigate('/layout/Recommendation/generate');
  };

  // console.log(formData);

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator isLoading={true} />
      ) : (
        <RecommendationForm
          initialValues={formData}
          sendDatatoBack={sendDatatoBack}
          goToGenerate={goToGenerate}
          topicId={topicId}
          apiMessage={apiMessage}
        />
      )}
    </div>
  );
};

export default RecommendationFormLogic;
