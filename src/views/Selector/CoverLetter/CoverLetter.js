import React from 'react';
import styles from "./CoverLetter.module.css";
import CoverLetterTemplate from '../../../components/CoverLetterTemplate/CoverLetterTemplate'
import imgPdf from '../../../assets/images/imgPdf.PNG'

export default function CoverLetter() {
  return (
    <div className={styles.container}>
      <CoverLetterTemplate/>
      <div className={styles.downloadContainer}>
        <img className={styles.imgPdfStyle} src={imgPdf} alt="i_icon" />
        <button className={styles.btnStyle}>Download</button>
      </div>
    </div>
  );
}
