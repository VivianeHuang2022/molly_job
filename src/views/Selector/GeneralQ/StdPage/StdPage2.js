import React from 'react'
import texts from '../../../texts'
import styles from './StdPage.module.css'
import SelectBox from '../../../../components/SelectBox/SelectBox'


export default function StdPage2() {

  return (
    <div className={styles.container}>
      <div className={styles.textStyle}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page2.P2Q1}</div>
        <SelectBox options={texts.GeberalQ.StdPage.Page2.P2Q1_Options}/>
      </div>
      <div className={styles.componentStyle}>
        <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page2.P2Q2}</div>
        <SelectBox options={texts.GeberalQ.StdPage.Page2.P2Q2_Options}/>
      </div>
    </div>
  );
}


