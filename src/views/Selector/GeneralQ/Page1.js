import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, dataSaveHandle } from '../../../redux/slice'; // 导入你的 action

export default function  Page1(props) {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.formDataQP1); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateFormData({pNum:1, payload: { [name]: value }}));
    //本地数据处理
    dataSaveHandle(name, value, 1)
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
