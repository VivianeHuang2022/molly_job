import React, { useState, useEffect } from "react";
import { getCoverLetterImg, switchCoverLetterImg} from "../../utils/api";
import styles from "./CoverLetterTemplate.module.css";
import "./CoverLetterTemplateNew.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { Link } from "react-router-dom";


export default function CoverLetterTemplate(props) {
  const [imgUrl, setImgUrl] = useState(null);
  const [countId, setCountId] = useState(1);
  const [language, setLanguage] = useState("EN");
  const uId = localStorage.getItem("uId");

  const changeTemplate = async (curCountId) => {
      const newCountId = curCountId +1;
      var lan = language
      const response = await getCoverLetterImg(uId,newCountId,lan);
      const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
      var data = {
        countId:countId,
        language:language
      }
      props.onUpdateData(data);
      if(newCountId>=8){
        setCountId(1)
      }else{
        setCountId(newCountId);
      }
      console.log(data)
  };

  const switchLanguage = async (curCountId)=>{
    const newLan = language === "EN" ? "DE" : "EN";
    setLanguage(newLan); // 更新语言状态
    try {
      const response = await switchCoverLetterImg(uId,curCountId,newLan);
      const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
    // fetchImg(newLan); 
  }
  const fetchImg = async (lan = language) => {
    try {
      const response = await getCoverLetterImg(uId,countId,lan);
    const file = new Blob([response.data], { type: "image/jpeg" });
      const fileURL = URL.createObjectURL(file);
      setImgUrl(fileURL);
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
  };

  useEffect(() => {
    fetchImg(language);
    // setCountId(2)
    var data = {
      countId:countId,
      language:language
    }
    props.onUpdateData(data);
  }, []);
  return (
    <div className={styles.coverLetterContainer}>
      <div className={styles.coverLetterContent}>
        {imgUrl && (
          <img className={styles.imgStyle} src={imgUrl} alt="Loaded from server" />
        )}
      </div>
      <div className={styles.coverLetterFooter}>
        <button onClick={()=>changeTemplate(countId)}>Change Template</button> 
        <button onClick={()=>switchLanguage(countId)}>{language === "EN"?"Switch to German":" Switch to English"}</button> 
        {/* <Link to="/layout/resume" style={{ color: "blue" }}>
          CREATE RESUME
        </Link> */}
      </div>
    </div>
  );
}




