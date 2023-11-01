import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'

export default function  Page1(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page1.Q_title}</div>
      <QInput title={texts.GeberalQ.Page1.D_Title} placeholder = {texts.GeberalQ.Page1.D_Title_PH}/>
      <QInput title={texts.GeberalQ.Page1.D_Company} placeholder={texts.GeberalQ.Page1.D_Company_PH}/>
      <QInput title={texts.GeberalQ.Page1.D_Description} type={"text"} placeholder={texts.GeberalQ.Page1.D_Description_PH}/>
    </div>
  )
}
