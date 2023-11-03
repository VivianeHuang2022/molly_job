import React,{useEffect, useState} from 'react'
import texts from '../../texts'
// import QInput from '../../../components/QInput/QInput'
import style from './Page.module.css'
import {useSelector,useDispatch } from 'react-redux';
import { updateFormData, dataSaveHandle } from '../../../redux/slice'; // 导入你的 action

export default function Page5() {
  const [activeButton, setActiveButton] = useState(null);
  var formData = useSelector((state) => state.formDataQP5); 
  useEffect(()=>{
    setActiveButton(formData.years)
  },[formData])
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
  const dispatch = useDispatch();
  const handleClick = () => {
    setActiveButton(index);
    const name = 'years'
    dispatch(updateFormData({pNum:5, payload: { [name]: index }}));
    dataSaveHandle(name, index, 5)
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