import React from 'react'
import styles from './resume.module.css'
import resumeBg from "../../../assets/images/resume_coming_soon.jpg";

export default function Resume() {
  return (
    <div className={styles.container}>
      <img src={resumeBg} alt='bg'/>
    </div>
  )
}
