import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'

export default function Page4() {
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page4.Q_title}</div>
      <QInput title={texts.GeberalQ.Page4.Q_Backgrund} type="text" size="50px" placeholder={texts.GeberalQ.Page4.Q_Backgrund_PH}/>
      <QInput title={texts.GeberalQ.Page4.Q_Action} type="text" size="150px" placeholder={texts.GeberalQ.Page4.Q_Action_PH}/>
      <QInput title={texts.GeberalQ.Page4.Q_Result} type="text" size="80px" placeholder={texts.GeberalQ.Page4.Q_Result_PH}/>
    </div>
  )
}
