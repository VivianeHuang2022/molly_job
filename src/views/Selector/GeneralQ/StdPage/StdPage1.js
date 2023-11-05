import React from 'react'
import texts from '../../../texts'
import styles from './StdPage.module.css'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
export default function StdPage1() {

  const enterLoading = ()=>{

  }

  return (
    <div className={styles.container}>
      <div className={styles.textStyle}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q1}</div>
        <select 
          id="P1Q1" name='P1Q1' 
          className={styles.selectorStyle}>
            {texts.GeberalQ.StdPage.Page1.P1Q1_Options.map(
              item=><option value={item}>{item}</option>
            )}
        </select>
      </div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q2}</div>
        <select 
          id="P1Q1" name='P1Q1' 
          className={styles.selectorStyle}>
            {texts.GeberalQ.StdPage.Page1.P1Q2_Options.map(
              item=><option value={item}>{item}</option>
            )}
        </select>
      </div>
      <DownOutlined style={{color:'white',background:'black'}}/>
    </div>
  )
}
