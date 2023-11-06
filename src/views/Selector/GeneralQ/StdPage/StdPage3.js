import React from 'react'
import texts from '../../../texts'
import styles from './StdPage.module.css'
import SelectBox from '../../../../components/SelectBox/SelectBox'

export default function StdPage3() {
  return (
    <div className={styles.container}>
      <div className={styles.textStyle}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page3.P3Q1}</div>
        <SelectBox options={texts.GeberalQ.StdPage.Page3.P3Q1_Options}/>
      </div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page3.P3Q2}</div>
        <SelectBox options={texts.GeberalQ.StdPage.Page3.P3Q2_Options}/>
      </div>
    </div>
  )
}
