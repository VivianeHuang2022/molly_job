import React from 'react'
import QInput from '../../../../components/QInput/QInput'
import styles from './StdPage.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateStdData, stdDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action

export default function StdPage9() {
  const dispatch = useDispatch();
  
  var formData = useSelector((state) => state.stdDataQP9); 
    // 使用 dispatch 更新 Redux Store
    const handleInputChange = (name, value) => {
      dispatch(updateStdData({pNum:9, payload: { [name]: value }}));
      //本地数据处理
      stdDataSaveHandle(name, value, 9)
    };
  return (
    <div className={styles.container}>
      <div style={{fontSize:'30px',fontWeight:'blod',margin:'0 0 20px 0', textAlign:'left'}}>FINAL STEP</div>
      <div className={styles.subContainer}>
      <QInput 
        title="First name"
        placeholder = "e.g. Vivinae"
        value = {formData.FirstName||''}
        onChange={(e)=>handleInputChange('FirstName',e.target.value)}
        />
        <QInput 
        title="Surname"
        placeholder = "e.g. Fa"
        value = {formData.Surname||''}
        onChange={(e)=>handleInputChange('Surname',e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
      <QInput 
        title="Nationality"
        placeholder = "e.g. India"
        value = {formData.Nationality||''}
        onChange={(e)=>handleInputChange('Nationality',e.target.value)}
        />
        <QInput 
        title="Birthday"
        placeholder = "e.g. 1992.12"
        value = {formData.Birthday||''}
        onChange={(e)=>handleInputChange('Birthday',e.target.value)}
        />
      </div>
      <div style={{width:'100%'}}>
      <QInput 
        title="Address"
        placeholder = "e.g. house number, street, city"
        value = {formData.Address||''}
        onChange={(e)=>handleInputChange('Address',e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
      <QInput 
        title="Tel"
        placeholder = "e.g. 1234567"
        value = {formData.Tel||''}
        onChange={(e)=>handleInputChange('Tel',e.target.value)}
        />
        <QInput 
        title="Email"
        placeholder = "e.g. xx@gmail.com"
        value = {formData.Email||''}
        onChange={(e)=>handleInputChange('Email',e.target.value)}
        />
      </div>
    </div>
  )
}
