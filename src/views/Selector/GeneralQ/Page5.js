import React,{useEffect, useState} from 'react'
import texts from '../../texts'
// import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'

export default function Page5() {
  const [activeButton, setActiveButton] = useState(null);
  useEffect(()=>{
    setActiveButton(0)
  },[])
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.Page5.Q_title}</div>
      <div className={style.subTitle}>{texts.GeberalQ.Page5.Q_Notification}</div>
      {/* <QInput title={texts.GeberalQ.Page5.Q_Notification}/> */}
      <div className={style.buttonContainer}>
        {Array(7).fill().map((_, index) => (
          <CircleButton
            key={index}
            index={index}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        ))}
      </div>
    </div>
  )
}

function CircleButton({ index, activeButton, setActiveButton }) {
  const isActive = index === activeButton;
  const handleClick = () => {
    setActiveButton(index);
  };
  return (
    <button
      style={isActive?{background:'black'}:{background:'#adb0b0'}}
      className={style.circleButton}
      onClick={handleClick}
    >
      {index===6?index-1 +'+':index}
    </button>
  );
}