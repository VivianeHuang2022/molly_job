import React from 'react'
import texts from '../../../texts'
import QInput from '../../../../components/QInput/QInput'
import style from './JobPage.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, dataSaveHandle } from '../../../../redux/slice';
export default function JobPage3() {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.formDataQP3); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateFormData({pNum:3, payload: { [name]: value }}));
    dataSaveHandle(name, value, 3)
  };
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page3.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.JobPage.Page3.TOP1} 
        placeholder={texts.GeberalQ.JobPage.Page3.TOP1_PH}
        value = {formData.top1||''}
        onChange={(e)=>handleInputChange('top1',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.JobPage.Page3.TOP2} 
        placeholder={texts.GeberalQ.JobPage.Page3.TOP2_PH}
        value = {formData.top2||''}
        onChange={(e)=>handleInputChange('top2',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.JobPage.Page3.TOP3} 
        placeholder={texts.GeberalQ.JobPage.Page3.TOP3_PH}
        value = {formData.top3||''}
        onChange={(e)=>handleInputChange('top3',e.target.value)}
      />
    </div>
  )
}
