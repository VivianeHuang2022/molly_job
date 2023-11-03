import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, dataSaveHandle } from '../../../redux/slice';

export default function Page2() {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.formDataQP2); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateFormData({pNum:2, payload: { [name]: value }}));
    dataSaveHandle(name, value, 2)
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page2.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.Page2.R_Title} 
        placeholder={texts.GeberalQ.Page2.R_Title_PH}
        value = {formData.title||''}
        onChange={(e)=>handleInputChange('title',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.Page2.R_Company} 
        placeholder={texts.GeberalQ.Page2.R_Company_PH}
        value={formData.company || ''}
        onChange={(e) => handleInputChange('company', e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.Page2.R_Description} 
        type="text" 
        placeholder={texts.GeberalQ.Page2.R_Description_PH}
        value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
    </div>
  )
}
