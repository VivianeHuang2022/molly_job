import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Question.module.css";

export default function Question(props) {
  const childrenCount = props.Count;
  console.log(childrenCount);
  const navigate = useNavigate();
  const location = useLocation();
  const handleToNext = () => {
    const currentQNumber = parseInt(location.pathname.split("/page")[1], 10);
    if (currentQNumber < childrenCount) {
      const nextQ = "page" + (currentQNumber + 1);
      navigate(`/layout/generalq/${nextQ}`);
    }
    if (currentQNumber === childrenCount) {
      navigate("/layout/interview");
    }
  };
  const handlToLast = () => {
    const currentQNumber = parseInt(location.pathname.split("/page")[1], 10);
    if (currentQNumber > 1) {
      const lastQ = "page" + (currentQNumber - 1);
      navigate(`/layout/generalq/${lastQ}`);
    }
  };
  return (
    <div className={style.container}>
      {props.children}
      <div className={style.footer}>
        <button className={style.btnLast} onClick={handlToLast}>Last</button>
        <button className={style.btnNext} onClick={handleToNext}>Next</button>
      </div>
    </div>
  );
}
