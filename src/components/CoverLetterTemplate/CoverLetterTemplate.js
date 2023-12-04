import React, { useState, useEffect } from "react";
import { getCoverLetterImg,createCoverLetter} from "../../utils/api";
import styles from "./CoverLetterTemplate.module.css";
import "./CoverLetterTemplateNew.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { Link } from "react-router-dom";


export default function CoverLetterTemplate() {
  const [imgUrl, setImgUrl] = useState(null);
  const [countId, setCountId] = useState(1)
  const uId = localStorage.getItem("uId");

  const changeTemplate = async () => {
    setCountId(prevCount => (prevCount >= 6 ? 1 : prevCount + 1));
    console.log(countId);
    const response = await getCoverLetterImg(uId,countId);
    const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);

  };

  var data = generateDataGroup();
  console.log(data);
  const fetchPdf = async () => {
    try {
      const response = await createCoverLetter(generateDataGroup());
      // const response = await getCoverLetterImg(uId,countId);
      const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
  };

  useEffect(() => {
    fetchPdf();
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

const generateDataGroup = () => {
  var stdDataQP9 = localStorage.getItem("stdDataQP9")?JSON.parse(localStorage.getItem("stdDataQP9")):{};
  var stdDataQP1 = localStorage.getItem("stdDataQP1")?JSON.parse(localStorage.getItem("stdDataQP1")):{};
  var stdDataQP2 = localStorage.getItem("stdDataQP2")?JSON.parse(localStorage.getItem("stdDataQP2")):{};
  var stdDataQP3 = localStorage.getItem("stdDataQP3")?JSON.parse(localStorage.getItem("stdDataQP3")):{};
  var stdDataQP7 = localStorage.getItem("stdDataQP7")?JSON.parse(localStorage.getItem("stdDataQP7")):{};
  const dataGroup ={
    uId:localStorage.getItem("uId"),
    Name:stdDataQP9.FirstName+ " " + stdDataQP9.Surname,
    Nationality:stdDataQP9.Nationality,
    Birthday:stdDataQP9.Birthday,
    Address:stdDataQP9.Address,
    Tel:stdDataQP9.Tel,
    Email:stdDataQP9.Email,
    dreamDegree:stdDataQP1.apDegree,
    dreamUni:stdDataQP1.drUni,
    dreamMajor:stdDataQP2.curFocus,
    programStrengths:stdDataQP7.proStrenghths,
    currentDegree:stdDataQP3.curDegree,
    currentMajor:stdDataQP3.curMajor,
    currentUni:stdDataQP3.curUni,

  }
  return dataGroup; 
};


