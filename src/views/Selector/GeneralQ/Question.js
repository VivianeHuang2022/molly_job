import React,{useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Question.module.css";
import { createStdCoverLetter} from "../../../utils/api";
import AlertContext from '../../../components/AlertProvider/AlertContext';


export default function Question(props) {


  const childrenCount = props.Count;
  
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlertMessage } = useContext(AlertContext);

  const handleToNext = async () => {
    const currentQNumber = parseInt(location.pathname.split("/page")[1], 10);
      if (currentQNumber < childrenCount) {
        const nextQ = "page" + (currentQNumber + 1);
        navigate(`/layout/generalq/${nextQ}`);
      }
      if (currentQNumber === childrenCount) {
        if(localStorage.getItem("topicId")==="1"){
          var data = generateStdDataGroup();
          const response = await createStdCoverLetter(data);
          if(response.status===200){
            navigate("/layout/coverletter")
          }
          else{
            showAlertMessage("Error","Post data failed!, Please check your data!","error")
          }

        }else{
          //job逻辑
          navigate("/layout/interview")
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
        <button className={style.btnLast} onClick={handlToLast}>Back</button>
        <button className={style.btnNext} type="submit" onClick={handleToNext}>Next</button>
      </div>
    </div>
  );
}

const generateStdDataGroup = () => {
  var stdDataQP9 = localStorage.getItem("stdDataQP9")?JSON.parse(localStorage.getItem("stdDataQP9")):{};
  var stdDataQP1 = localStorage.getItem("stdDataQP1")?JSON.parse(localStorage.getItem("stdDataQP1")):{};
  var stdDataQP3 = localStorage.getItem("stdDataQP3")?JSON.parse(localStorage.getItem("stdDataQP3")):{};
  var stdDataQP4 = localStorage.getItem("stdDataQP4")?JSON.parse(localStorage.getItem("stdDataQP4")):{};
  var stdDataQP5 = localStorage.getItem("stdDataQP5")?JSON.parse(localStorage.getItem("stdDataQP5")):{};
  var stdDataQP6 = localStorage.getItem("stdDataQP6")?JSON.parse(localStorage.getItem("stdDataQP6")):{};
  var stdDataQP7 = localStorage.getItem("stdDataQP7")?JSON.parse(localStorage.getItem("stdDataQP7")):{};
  var stdDataQP8 = localStorage.getItem("stdDataQP8")?JSON.parse(localStorage.getItem("stdDataQP8")):{};

  const dataGroup ={
    // personal Info topicId
    uId:localStorage.getItem("uId"),
    topicId:localStorage.getItem("topicId"),
    firstName:stdDataQP9.FirstName,
    surname:stdDataQP9.Surname,
    userNationality:stdDataQP9.Nationality,
    userBirthday:stdDataQP9.Birthday,
    userAddress:stdDataQP9.Address,
    userTel:stdDataQP9.Tel,
    userEmail:stdDataQP9.Email,
    // dream Info
    dreamDegree:stdDataQP1.drDegree,
    dreamUni:stdDataQP1.drUni,
    dreamMajor:stdDataQP1.drMajor,
    dreamCountry:stdDataQP1.drCountry,
    // current Info
    currentDegree:stdDataQP3.curDegree,
    currentMajor:stdDataQP3.curMajor,
    currentUni:stdDataQP3.curUni,
    currentCountry:stdDataQP3.curCountry,
    currentCourses:stdDataQP3.curCourses,
    currentGPA:stdDataQP3.curGPA?stdDataQP3.curGPA:"",
    // get Info
    getProject:stdDataQP4.getProject,
    getConference:stdDataQP4.getConference,
    getAwards:stdDataQP4.getAwards,
    getCompetitions:stdDataQP4.getCompetitions,
    getSkills:stdDataQP4.getSkills,
    getResearch:stdDataQP4.getResearch,
    // intern Info
    internRole:stdDataQP5.internRole,
    internCompany:stdDataQP5.internCompany,
    internSkills:stdDataQP5.internSkills,
    internField:stdDataQP5.internField,
    internTools:stdDataQP5.internTools,
    // professor Info
    ideaArea:stdDataQP6.ideaArea,
    professorName:stdDataQP6.profName,
    professorResearch:stdDataQP6.profResearch,
    //career Info
    careerOrGoal:stdDataQP7.careerOrGoal,
    careerOrField:stdDataQP7.careerOrField,
    // language Info
    didLan:stdDataQP8.didLan,
    didTest:stdDataQP8.didTest,
    didScore:stdDataQP8.didScore,
  }
  return dataGroup; 
};
