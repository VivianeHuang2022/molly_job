import React,{useEffect, useState} from 'react'
import texts from '../../../texts'
// import QInput from '../../../components/QInput/QInput'
import style from './JobPage.module.css'
import {useSelector,useDispatch } from 'react-redux';
import { updateJobData, jobDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action

export default function JobPage5() {
  const [activeButton, setActiveButton] = useState(null);
  var formData = useSelector((state) => state.coverLetter.jobDataQP5); 
  useEffect(()=>{
    const defaultIndex = formData.years>6?6:formData.years
    setActiveButton(defaultIndex)
  },[formData])
  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page5.Q_title}</div>
      <div className={style.subTitle}>{texts.GeberalQ.JobPage.Page5.Q_Notification}</div>
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
    dispatch(updateJobData({pNum:5, payload: { [name]: index }}));
    jobDataSaveHandle(name, index, 5)
  };
  return (
    <button
      style={isActive?{background:'black'}:{background:'#adb0b0'}}
      className={style.circleButton}
      onClick={handleClick}
    >
      {index>5?index-1 +'+':index}
    </button>
  );
}