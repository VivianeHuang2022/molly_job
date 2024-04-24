import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import texts_EN from '../texts';
import texts_CN from '../texts_CN';
import styles from './Home.module.css'
import studyShowImg from '../../assets/images/studyShowImg.png'
import careerShowImg from '../../assets/images/careerShowImg.png'

export default function Home() {
  const navigate = useNavigate()
  const texts = localStorage.getItem("Lan")==="CN"? texts_CN:texts_EN
  const handleTorecommendation = ()=>{
    navigate("/layout/recommendation")
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
           
            <button 
              className={styles.buttonStyle}
              style={Id==="1"?{background:"darkgray"}:{background:"saddlebrown"}}
              onClick={handleToCoverLetter}>{texts.homeTexts.coverletterTxt}</button>

            <button 
              className={styles.buttonStyle} 
              style={Id==="1"?{background:"gray"}:{background:"darkgray"}}
              onClick={handleTorecommendation}>{Id==="1"?texts.homeTexts.applicationTxt:texts.homeTexts.interviewTxt}</button>

            <button 
              className={styles.buttonStyle}
              style={{background:"black"}}
              onClick={handleToResume}>{texts.homeTexts.resumeTxt}</button>
            {Id==="1"&&<button 
              className={styles.buttonStyle}
              style={{background:"#0097b2"}}
              onClick={handleToUniGuide}>{texts.homeTexts.uniGuidTxt}</button>}
        </div>
        <img src={Id==="1"?studyShowImg:careerShowImg} alt='showImg' className={styles.showImg}
        style={Id==="2"?{marginRight:"3%"}:null}></img>
    </div>
    </div>
  )
}
