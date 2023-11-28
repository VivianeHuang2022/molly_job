import React from 'react'
import texts from '../../../texts'
import QInput from '../../../../components/QInput/QInput'
import style from './JobPage.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateJobData, jobDataSaveHandle } from '../../../../redux/slice';

export default function JobPage2() {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.jobDataQP2); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateJobData({pNum:2, payload: { [name]: value }}));
    jobDataSaveHandle(name, value, 2)
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page2.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.JobPage.Page2.R_Title} 
        placeholder={texts.GeberalQ.JobPage.Page2.R_Title_PH}
        value = {formData.title||''}
        onChange={(e)=>handleInputChange('title',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.JobPage.Page2.R_Company} 
        placeholder={texts.GeberalQ.JobPage.Page2.R_Company_PH}
        value={formData.company || ''}
        onChange={(e) => handleInputChange('company', e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.JobPage.Page2.R_Description} 
        type="text" 
        placeholder={texts.GeberalQ.JobPage.Page2.R_Description_PH}
        value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
    </div>
  )
}
