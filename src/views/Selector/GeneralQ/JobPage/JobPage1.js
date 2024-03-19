import React from 'react'
import texts from '../../../texts'
import QInput from '../../../../components/QInput/QInput'
import style from './JobPage.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateJobData, jobDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action

export default function  JobPage1(props) {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.coverLetter.jobDataQP1); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateJobData({pNum:1, payload: { [name]: value }}));
    //本地数据处理
    jobDataSaveHandle(name, value, 1)
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page1.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.JobPage.Page1.D_Title} 
        placeholder = {texts.GeberalQ.JobPage.Page1.D_Title_PH}
        value = {formData.title||''}
        onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      <QInput 
        title={texts.GeberalQ.JobPage.Page1.D_Company} 
        placeholder={texts.GeberalQ.JobPage.Page1.D_Company_PH}
        value={formData.company || ''}
        onChange={(e) => handleInputChange('company', e.target.value)}/>
      <QInput 
        title={texts.GeberalQ.JobPage.Page1.D_Description} 
        type={"text"} 
        placeholder={texts.GeberalQ.JobPage.Page1.D_Description_PH}
        value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
        />
    </div>
  )
}
