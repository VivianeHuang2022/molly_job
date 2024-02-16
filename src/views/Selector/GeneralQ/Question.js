import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Question.module.css";
import { createStdCoverLetter } from "../../../utils/api";
import AlertContext from "../../../components/AlertProvider/AlertContext";
import texts_EN from "../../texts";
import texts_CN from "../../texts_CN";

export default function Question(props) {
  const childrenCount = props.Count;
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlertMessage } = useContext(AlertContext);
  const texts = localStorage.getItem("Lan") === "CN" ? texts_CN : texts_EN;
  const handleToNext = async () => {
    const currentQNumber = parseInt(location.pathname.split("/page")[1], 10);
    if (currentQNumber < childrenCount) {
      const nextQ = "page" + (currentQNumber + 1);
      navigate(`/layout/generalq/${nextQ}`);
    }
    if (currentQNumber === childrenCount) {
      if (localStorage.getItem("topicId") === "1") {
        var data = generateStdDataGroup();
        const response = await createStdCoverLetter(data);
        if (response.status === 200) {
          navigate("/layout/coverletter");
        } else {
          showAlertMessage(
            "Error",
            "Post data failed!, Please check your data!",
            "error"
          );
        }
      } else {
        //job逻辑
        navigate("/layout/interview");
      }
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
        <button className={style.btnLast} onClick={handlToLast}>
          {texts.QuestionP.back}
        </button>
        <button className={style.btnNext} type="submit" onClick={handleToNext}>
          {texts.QuestionP.next}
        </button>
      </div>
    </div>
  );
}

const generateStdDataGroup = () => {
  var stdDataQP9 = localStorage.getItem("stdDataQP9")
    ? JSON.parse(localStorage.getItem("stdDataQP9"))
    : {};
  var stdDataQP1 = localStorage.getItem("stdDataQP1")
    ? JSON.parse(localStorage.getItem("stdDataQP1"))
    : {};
  var stdDataQP2 = localStorage.getItem("stdDataQP3")
    ? JSON.parse(localStorage.getItem("stdDataQP3"))
    : {};
  var stdDataQP3 = localStorage.getItem("stdDataQP3")
    ? JSON.parse(localStorage.getItem("stdDataQP3"))
    : {};
  var stdDataQP4 = localStorage.getItem("stdDataQP4")
    ? JSON.parse(localStorage.getItem("stdDataQP4"))
    : {};

  const dataGroup = {
    // personal Info topicId
    uId: localStorage.getItem("uId"),
    topicId: localStorage.getItem("topicId"),
    firstName: stdDataQP9.FirstName,
    surname: stdDataQP9.Surname,
    userNationality: stdDataQP9.Nationality,
    userBirthday: stdDataQP9.Birthday,
    userAddress: stdDataQP9.Address,
    userTel: stdDataQP9.Tel,
    userEmail: stdDataQP9.Email,
    // dream Info
    dreamDegree: stdDataQP1.drDegree,
    dreamUni: stdDataQP1.drUni,
    dreamMajor: stdDataQP1.drMajor,
    dreamCountry: stdDataQP1.drCountry,
    // current Info
    currentDegree: stdDataQP2.curDegree,
    currentMajor: stdDataQP2.curMajor,
    currentUni: stdDataQP2.curUni,
    currentCountry: stdDataQP2.curCountry,
    currentCourses: stdDataQP2.curCourses,
    currentGPA: stdDataQP2.curGPA ? stdDataQP2.curGPA : "",
    // get Info
    getProject: stdDataQP3.getProject,
    getConference: stdDataQP3.getConference,
    getAwards: stdDataQP3.getAwards,
    getCompetitions: stdDataQP3.getCompetitions,
    getSkills: stdDataQP3.getSkills,
    // intern Info
    internRole: stdDataQP3.internRole,
    internCompany: stdDataQP3.internCompany,

    // professor Info
    ideaArea: stdDataQP4.ideaArea,

    //career Info
    careerOrGoal: stdDataQP4.careerOrGoal,
  };
  return dataGroup;
};
