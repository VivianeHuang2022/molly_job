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
  const matchDataToBack = (data) => {
    
    // 创建一个新的dataGroup对象
    // const dataGroup = { sectionName: [] };
    const dataGroup = {};
    // 20240423 lily我这里做循环遍历的原因是原本我前端用的结构跟传给后端的不一样,我原来是以haifei0323在群里的那个格式作为后端api格式处理的,前端测试用的api: https://mock.apifox.com/m2/4308331-3951008-default/163703866 我今天看到resume20240422_zhf这个修改调整了格式,看起来跟我在redux data使用的是一样的,如果前后端格式一样的话就不需要做循环匹配,同理在redux 接受异步那个函数也不需要做额外的匹配.
    Object.keys(data).forEach((sectionKey) => {
      const section = data[sectionKey];
      dataGroup[sectionKey] = section.data;
      // dataGroup.sectionName.push(section.sectionName);
      //dataGroup[sectionKey] = section
    });

    // cvType信息
    dataGroup.currentSectionType = currentSectionType;
    dataGroup.timeStamp = new Date().getTime();
    //console.log(dataGroup);
    return dataGroup;
  };
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
        matchDataToBack={matchDataToBack}
      />
    </div>
  );
};

export default CvPage;
