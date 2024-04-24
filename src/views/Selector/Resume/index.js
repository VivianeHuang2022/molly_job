import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './resume.module.css';
import ActionContainer from './Action';
import CvContainer from './Cv';
import { getLabels } from '../../local'; // 导入语言配置文件加载函数
import {
  selectCvData,
  selectCurrentSectionType,
  selectAllSectionType,
} from '../../../redux/slices/cvDataSlice';
import { fetchCVData } from '../../../redux/actions/fetcDataActions';
import { selectCurrentLanguage } from '../../../redux/slices/languageSlice';

// 导出组件------------------------------------------------
const CvPage = () => {
  // 使用 useSelector 钩子选择 Redux store 中的当前语言设置
  const currentLanguage = useSelector(selectCurrentLanguage);
  const singleCvData = useSelector(selectCvData);
  const currentSectionType = useSelector(selectCurrentSectionType);
  const allSectionType = useSelector(selectAllSectionType);

  const dispatch = useDispatch();
  useEffect(() => {
    // 在组件挂载时调用异步 action creator，从后端获取数据
    dispatch(fetchCVData());
  }, [dispatch]);

  // 根据当前语言设置获取对应的语言配置文件
  const labels = getLabels(currentLanguage).resumeTxt;

  return (
    <div className={styles.container}>
      <ActionContainer
        labels={labels}
        singleCvData={singleCvData}
        currentSectionType={currentSectionType}
        allSectionType={allSectionType}
        styles={styles}
      />
      <CvContainer
        labels={labels}
        singleCvData={singleCvData}
        currentSectionType={currentSectionType}
        styles={styles}
      />
    </div>
  );
};

export default CvPage;
