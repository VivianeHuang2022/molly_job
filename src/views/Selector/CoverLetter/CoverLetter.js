import React, { useState } from "react";
import styles from "./CoverLetter.module.css";
import CoverLetterTemplate from "../../../components/CoverLetterTemplate/CoverLetterTemplate";
import imgPdf from "../../../assets/images/imgPdf.PNG";
import { downloadCoverLetterPdf } from "../../../utils/api";

export default function CoverLetter() {
  const [coverLetterData, setCoverLetterData] = useState({});
  const downloadCoverletter = async () => {
    let { countId, language } = coverLetterData;
    const uId = localStorage.getItem("uId");
    //add generate & regenerate button

    try {
      const response = await downloadCoverLetterPdf(uId, countId, language);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "coverletter.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
  };

  const updateCoverLetterData = (data) => {
    setCoverLetterData(data);
  };
  return (
    <div className={styles.container}>
      {/* cover letter 生成img预览区 */}
      {/* <CoverLetterTemplate onUpdateData={updateCoverLetterData} /> */}

      {/* 下载区域 */}
      {/* <div className={styles.downloadContainer}>
        <img className={styles.imgPdfStyle} src={imgPdf} alt="i_icon" />
        <button className={styles.btnStyle} onClick={downloadCoverletter}>
          Download
        </button>
      </div> */}
    </div>
  );
}
