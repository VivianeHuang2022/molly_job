import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'

export default function Page2() {
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page2.Q_title}</div>
      <QInput title={texts.GeberalQ.Page2.R_Title} placeholder={texts.GeberalQ.Page2.R_Title_PH}/>
      <QInput title={texts.GeberalQ.Page2.R_Company} placeholder={texts.GeberalQ.Page2.R_Company_PH}/>
      <QInput title={texts.GeberalQ.Page2.R_Description} type="text" placeholder={texts.GeberalQ.Page2.R_Description_PH}/>
    </div>
  )
}
