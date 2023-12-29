import React, { useState} from 'react'
import logoImage from "../../assets/images/Logo.PNG";
import styles from './Start.module.css'
import texts_EN from '../texts';
import texts_CN from '../texts_CN';
import studyingAbroadIcon from '../../assets/images/Studying_abroad.PNG'
import jobMentoringIcon from '../../assets/images/Job_mentoring.PNG'
import ModalComponent from './Modal';
import { useNavigate } from "react-router-dom";


export default function Start() {
  const defaultLan = localStorage.getItem("Lan")==="CN"?"CN":"EN"
  const [lan, setLan] = useState(defaultLan);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const texts = lan==="EN"?texts_EN:texts_CN
  const navigate = useNavigate();
  const handleJumpToHome = (id)=>{
    setSelectedId(id); 
    localStorage.setItem("topicId",id)
    id===2?setShowModal(true):navigate('/home/1');
  }

  const switchLanguage = () => {
    var newLan = lan==="EN"?"CN":"EN";
    setLan(newLan)
    localStorage.setItem("Lan",newLan);
    console.log(newLan);
  };

  return (
    <div>
        <div className={styles.header}>
          <img src={logoImage} alt="logo" className={styles.logo}></img>
          <button onClick={switchLanguage} className={styles.languageButton}>{lan==="EN"?"简体中文":"English"}</button>
        </div>
        <div className={styles.title}>{texts.startTexts.pageTitle}</div>
        <div className={styles.containerStyle}>
            <div onClick={()=>handleJumpToHome(1)}>
                <img src={studyingAbroadIcon} alt='s_logo' className={styles.subLogo}></img>
                <div className={styles.title}>{texts.startTexts.studyingAbroadTitle}</div>
                <div className={styles.paragraph}>{texts.startTexts.studyingAbroadParagraph}</div>
            </div>
            <div onClick={()=>handleJumpToHome(2)}>
                <img src={jobMentoringIcon} alt='j_logo'className={styles.subLogo}></img>
                <div className={styles.title}>{texts.startTexts.jobMentoringTitle}</div>
                <div className={styles.paragraph}>{texts.startTexts.jobMentoringParagraph1}</div>
                <div className={styles.paragraph}>{texts.startTexts.jobMentoringParagraph2}</div>
                <div className={styles.paragraph}>{texts.startTexts.jobMentoringParagraph3}</div>
            </div>
        </div>
        <div className={styles.footLine}>
          {texts.startTexts.footLine}
        </div>
        {showModal && <ModalComponent id={selectedId}/>}
    </div>
  )
}
