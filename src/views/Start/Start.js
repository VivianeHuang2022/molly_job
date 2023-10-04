import React, { useState } from 'react'
import logoImage from "../../assets/images/Logo.PNG";
import styles from './Start.module.css'
import texts from '../texts';
import studyingAbroadIcon from '../../assets/images/Studying_abroad.PNG'
import jobMentoringIcon from '../../assets/images/Job_mentoring.PNG'
import ModalComponent from './Modal';

export default function Start() {

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleJumpToHome = (id)=>{
    // navigate(`/home/${id}`)
    setSelectedId(id); 
    setShowModal(true);
  }
  // const closeModal = () => {
  //   setShowModal(false);
  // }
  return (
    <div>
        <img src={logoImage} alt="logo" className={styles.logo}></img>
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
