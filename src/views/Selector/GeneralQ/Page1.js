import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../../redux/slice'; // 导入你的 action

export default function  Page1(props) {
  const dispatch = useDispatch();
  var formData = useSelector((state) => state.formData); 
  formData = JSON.parse(localStorage.getItem('formData')) || {};


  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateFormData({ [name]: value }));

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};

    const updatedFormData = { ...storedFormData, [name]: value };

    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page1.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.Page1.D_Title} 
        placeholder = {texts.GeberalQ.Page1.D_Title_PH}
        value = {formData.title||''}
        onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      <QInput 
        title={texts.GeberalQ.Page1.D_Company} 
        placeholder={texts.GeberalQ.Page1.D_Company_PH}
        value={formData.company || ''}
        onChange={(e) => handleInputChange('company', e.target.value)}/>
      <QInput 
        title={texts.GeberalQ.Page1.D_Description} 
        type={"text"} 
        placeholder={texts.GeberalQ.Page1.D_Description_PH}
        value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
        />
    </div>
  )
}
