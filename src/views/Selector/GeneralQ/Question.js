import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Question.module.css";
import { useDispatch } from 'react-redux';
import { updateFormData } from '../../../redux/slice'; // 导入你的 action

export default function Question(props) {
  const childrenCount = props.Count;
  
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleToNext = () => {
    const currentQNumber = parseInt(location.pathname.split("/page")[1], 10);
    if (currentQNumber < childrenCount) {
      const nextQ = "page" + (currentQNumber + 1);
      navigate(`/layout/generalq/${nextQ}`);
    }
    if (currentQNumber === childrenCount) {
      navigate("/layout/interview");
    }

    dispatch(updateFormData({
      title: props.title,
      company: props.company,
      description: props.description
    }));

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
