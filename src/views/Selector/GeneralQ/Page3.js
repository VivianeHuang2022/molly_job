import React from 'react'
import texts from '../../texts'
import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
export default function Page3() {
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page3.Q_title}</div>
      <QInput title={texts.GeberalQ.Page3.TOP1} placeholder={texts.GeberalQ.Page3.TOP1_PH}/>
      <QInput title={texts.GeberalQ.Page3.TOP2} placeholder={texts.GeberalQ.Page3.TOP2_PH}/>
      <QInput title={texts.GeberalQ.Page3.TOP3} placeholder={texts.GeberalQ.Page3.TOP3_PH}/>
    </div>
  )
}
