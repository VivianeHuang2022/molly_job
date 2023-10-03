import React from 'react'
import { useParams } from 'react-router-dom'
import texts from '../texts';
import styles from './Home.module.css'
import studyShowImg from '../../assets/images/studyShowImg.png'
import careerShowImg from '../../assets/images/careerShowImg.png'

export default function Home() {
    const{Id} = useParams()
  return (
    <div className={styles.backgroudStyle}>
    <div className={styles.containerStyle}>
        <div className={styles.listStyle}>
            <div className={styles.topTitle} style={Id==="1"?{color:"cyan"}:{color:"black"}}>
                {Id==="1"?texts.homeTexts.studyTitle:texts.homeTexts.careerTitle}</div>
            <div className={styles.title}>Start</div>
            <button className={styles.buttonStyle} 
            style={Id==="1"?{background:"gray"}:{background:"darkgray"}}>Interview</button>
            <button className={styles.buttonStyle}
            style={Id==="1"?{background:"darkgray"}:{background:"saddlebrown"}}>Cover Letter</button>
            <button className={styles.buttonStyle}
            style={{background:"black"}}>Resume</button>
        </div>
        <img src={Id==="1"?studyShowImg:careerShowImg} alt='showImg' className={styles.showImg}
        style={Id==="2"?{marginRight:"3%"}:null}></img>
    </div>
    </div>
  )
}
