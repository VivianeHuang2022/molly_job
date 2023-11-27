import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import texts from '../texts';
import styles from './Home.module.css'
import studyShowImg from '../../assets/images/studyShowImg.png'
import careerShowImg from '../../assets/images/careerShowImg.png'

export default function Home() {
  const navigate = useNavigate()

  const handleToGeneralQ = ()=>{
    navigate("/layout")
  }
  const handleToCoverLetter = ()=>{
    navigate("/layout/coverletter")
  }
  const handleToResume = ()=>{
    navigate("/layout/resume")
  }
  const handleToUniGuide =()=>{
    window.location.href = 'https://stu-de.org/';
  }
  const{Id} = useParams()

  return (
    <div className={styles.backgroudStyle}>
    <div className={styles.containerStyle}>
        <div className={styles.listStyle}>
            <div className={styles.topTitle} style={Id==="1"?{color:"cyan"}:{color:"black"}}>
                {Id==="1"?texts.homeTexts.studyTitle:texts.homeTexts.careerTitle}</div>
            <div className={styles.title}>Start</div>
            <button 
              className={styles.buttonStyle} 
              style={Id==="1"?{background:"gray"}:{background:"darkgray"}}
              onClick={handleToGeneralQ}>{Id==="1"?"Program Match":"Interview"}</button>
            <button 
              className={styles.buttonStyle}
              style={Id==="1"?{background:"darkgray"}:{background:"saddlebrown"}}
              onClick={handleToCoverLetter}>Cover Letter</button>
            <button 
              className={styles.buttonStyle}
              style={{background:"black"}}
              onClick={handleToResume}>Resume</button>
            {Id==="1"&&<button 
              className={styles.buttonStyle}
              style={{background:"#0097b2"}}
              onClick={handleToUniGuide}>Uni Guide</button>}
        </div>
        <img src={Id==="1"?studyShowImg:careerShowImg} alt='showImg' className={styles.showImg}
        style={Id==="2"?{marginRight:"3%"}:null}></img>
    </div>
    </div>
  )
}
