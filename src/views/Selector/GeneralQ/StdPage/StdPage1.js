import React from "react";
import texts_EN from "../../../texts";
import texts_CN from "../../../texts_CN";
import styles from "./StdPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import QInput from "../../../../components/QInput/QInput";
import { updateStdData, stdDataSaveHandle } from "../../../../redux/slice"; // 导入你的 action
// import SelectBox from '../../../../components/SelectBox/SelectBox'

export default function StdPage1() {
  const dispatch = useDispatch();
  var formData = useSelector((state) => state.coverLetter.stdDataQP1);
  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateStdData({ pNum: 1, payload: { [name]: value } }));
    //本地数据处理
    stdDataSaveHandle(name, value, 1);
  };
  const texts = localStorage.getItem("Lan") === "CN" ? texts_CN : texts_EN;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
      <QInput
        marB="20px"
        title={texts.GeberalQ.StdPage.Page1.P1Q1}
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q1_PH}
        value={formData.drCountry || ""}
        onChange={(e) => handleInputChange("drCountry", e.target.value)}
      />
      <QInput
        marB="20px"
        title={texts.GeberalQ.StdPage.Page1.P1Q2}
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q2_PH}
        value={formData.drUni || ""}
        onChange={(e) => handleInputChange("drUni", e.target.value)}
      />
      <QInput
        marB="20px"
        title={texts.GeberalQ.StdPage.Page1.P1Q3}
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q3_PH}
        value={formData.drDegree || ""}
        onChange={(e) => handleInputChange("drDegree", e.target.value)}
      />
      <QInput
        marB="20px"
        title={texts.GeberalQ.StdPage.Page1.P1Q4}
        placeholder={texts.GeberalQ.StdPage.Page1.P1Q4_PH}
        value={formData.drMajor || ""}
        onChange={(e) => handleInputChange("drMajor", e.target.value)}
      />
    </div>
  );

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.textStyle}>{texts.GeberalQ.StdPage.PgaeTitle}</div>
  //     <div className={styles.componentStyle}>
  //       <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q1}</div>
  //       <SelectBox options={texts.GeberalQ.StdPage.Page1.P1Q1_Options}/>
  //     </div>
  //     <div className={styles.componentStyle}>
  //       <div className={styles.textStyle}>{texts.GeberalQ.StdPage.Page1.P1Q2}</div>
  //       <SelectBox options={texts.GeberalQ.StdPage.Page1.P1Q2_Options}/>
  //     </div>
  //   </div>
  // )
}
