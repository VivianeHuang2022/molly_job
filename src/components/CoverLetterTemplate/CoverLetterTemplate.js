import React, { useState, useEffect } from "react";
import { getCoverLetterImg} from "../../utils/api";
import styles from "./CoverLetterTemplate.module.css";
import "./CoverLetterTemplateNew.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { Link } from "react-router-dom";


export default function CoverLetterTemplate() {
  const [imgUrl, setImgUrl] = useState(null);
  const [countId, setCountId] = useState(1)
  const uId = localStorage.getItem("uId");

  const changeTemplate = async () => {
    setCountId(prevCount => (prevCount >= 8 ? 1 : prevCount + 1));
    console.log(countId);
    const response = await getCoverLetterImg(uId,countId);
    const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
  };
  const fetchImg = async () => {
    try {
      const response = await getCoverLetterImg(uId,countId);
    const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
  };

  useEffect(() => {
    fetchImg();
    setCountId(2)
  }, []);
  return (
    <div className={styles.coverLetterContainer}>
      <div className={styles.coverLetterContent}>
        {imgUrl && (
          <img className={styles.imgStyle} src={imgUrl} alt="Loaded from server" />
        )}
      </div>
      <div className={styles.coverLetterFooter}>
        <button onClick={changeTemplate}>Change Template</button> 
        <button onClick={changeTemplate}>Switch to German</button> 
        {/* <Link to="/layout/resume" style={{ color: "blue" }}>
          CREATE RESUME
        </Link> */}
      </div>
    </div>
  );
}




