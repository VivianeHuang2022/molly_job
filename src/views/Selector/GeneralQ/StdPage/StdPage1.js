import React from 'react'
import texts from '../../../texts'
import styles from './StdPage.module.css'
import { useSelector, useDispatch } from 'react-redux';
import QInput from '../../../../components/QInput/QInput'
// import SelectBox from '../../../../components/SelectBox/SelectBox'

export default function StdPage1() {
  const dispatch = useDispatch();
  // var formData = useSelector((state) => state.formDataQP1); 
    // 使用 dispatch 更新 Redux Store
    const handleInputChange = (name, value) => {
      // dispatch(updateFormData({pNum:1, payload: { [name]: value }}));
      // //本地数据处理
      // dataSaveHandle(name, value, 1)
    };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
      <QInput 
        marB="20px"
        title={texts.GeberalQ.StdPage.Page1.P1Q1} 
        placeholder = {texts.GeberalQ.StdPage.Page1.P1Q1_PH}
        // value = {formData.title||''}
        onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      <QInput
        marB="20px" 
        title={texts.GeberalQ.StdPage.Page1.P1Q2}
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q2_PH}
        // value={formData.company || ''}
        onChange={(e) => handleInputChange('company', e.target.value)}/>
      <QInput
        marB="20px" 
        title={texts.GeberalQ.StdPage.Page1.P1Q3} 
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q3_PH}
        // value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
        />
    </div>
  )

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.textStyle}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
  //     <div className={styles.componentStyle}>
  //       <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q1}</div>
  //       <SelectBox options={texts.GeberalQ.StdPage.Page1.P1Q1_Options}/>
  //     </div>
  //     <div className={styles.componentStyle}>
  //       <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q2}</div>
  //       <SelectBox options={texts.GeberalQ.StdPage.Page1.P1Q2_Options}/>
  //     </div>
  //   </div>
  // )
}
