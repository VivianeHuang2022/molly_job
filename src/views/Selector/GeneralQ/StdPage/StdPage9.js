import React from 'react'
import QInput from '../../../../components/QInput/QInput'
import styles from './StdPage.module.css'
export default function StdPage9() {
  return (
    <div className={styles.container}>
      <div style={{fontSize:'30px',color:'orange',margin:'0 0 20px 0', textAlign:'left'}}>FINAL STEP</div>
      <div className={styles.subContainer}>
      <QInput 
        title="First name"
        placeholder = "e.g. Vivinae"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
        <QInput 
        title="Surname"
        placeholder = "e.g. Fa"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
      <QInput 
        title="Nationality"
        placeholder = "e.g. India"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
        <QInput 
        title="Birthday"
        placeholder = "e.g. 1992.12"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      </div>
      <div style={{width:'100%'}}>
      <QInput 
        title="Address"
        placeholder = "e.g. house number, street, city"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
      <QInput 
        title="Tel"
        placeholder = "e.g. 1234567"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
        <QInput 
        title="Email"
        placeholder = "e.g. xx@gmail.com"
        // value = {formData.title||''}
        // onChange={(e)=>handleInputChange('title',e.target.value)}
        />
      </div>
    </div>
  )
}
