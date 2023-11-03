import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, dataSaveHandle } from '../../../redux/slice'; // 导入你的 action

export default function Page4() {

  const dispatch = useDispatch();
  var formData = useSelector((state) => state.formDataQP4); 

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateFormData({pNum:4, payload: { [name]: value }}));
    dataSaveHandle(name, value, 4)
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page4.Q_title}</div>
      <QInput 
        title={texts.GeberalQ.Page4.Q_Backgrund} 
        type="text" size="50px" 
        placeholder={texts.GeberalQ.Page4.Q_Backgrund_PH}
        value = {formData.background||''}
        onChange={(e)=>handleInputChange('background',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.Page4.Q_Action} 
        type="text" size="150px" 
        placeholder={texts.GeberalQ.Page4.Q_Action_PH}
        value = {formData.action||''}
        onChange={(e)=>handleInputChange('action',e.target.value)}
      />
      <QInput 
        title={texts.GeberalQ.Page4.Q_Result} 
        type="text" size="80px" 
        placeholder={texts.GeberalQ.Page4.Q_Result_PH}
        value = {formData.result||''}
        onChange={(e)=>handleInputChange('result',e.target.value)}
      />
    </div>
  )
}
