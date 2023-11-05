import React, { useState } from 'react';
import { getCoverLetterPdf } from "../../../utils/api";
import styles from "./CoverLetter.module.css";
import CoverLetterTemplate from '../../../components/CoverLetterTemplate/CoverLetterTemplate'
import imgPdf from '../../../assets/images/imgPdf.PNG'


export default function CoverLetter() {
  const [pdfFile, setPdfFile] = useState(null);

    const fetchPdf = async () => {
        try {
            const response = await getCoverLetterPdf();
            const file = new Blob(
              [response.data], 
              {type: 'application/pdf'}
            );
            const fileURL = URL.createObjectURL(file);
            setPdfFile(fileURL);
        } catch (error) {
            console.error("Error fetching PDF: ", error);
        }
    };
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
