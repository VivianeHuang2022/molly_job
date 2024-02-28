import React from "react";
import QInput from "../../../../components/QInput/QInput";
import styles from "./StdPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateStdData, stdDataSaveHandle } from "../../../../redux/slice"; // 导入你的 action
import texts_EN from "../../../texts";
import texts_CN from "../../../texts_CN";

export default function StdPage5() {
  const dispatch = useDispatch();

  var formData = useSelector((state) => state.stdDataQP9);
  const texts = localStorage.getItem("Lan") === "CN" ? texts_CN : texts_EN;
  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateStdData({ pNum: 5, payload: { [name]: value } }));
    //本地数据处理
    stdDataSaveHandle(name, value, 5);
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "blod",
          margin: "0 0 20px 0",
          textAlign: "left",
        }}
      >
        {texts.GeberalQ.StdPage.Page5.P5T8}
      </div>
      <div className={styles.subContainer}>
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T1}
          placeholder="e.g. Vivinae"
          value={formData.FirstName || ""}
          onChange={(e) => handleInputChange("FirstName", e.target.value)}
        />
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T2}
          placeholder="e.g. Fa"
          value={formData.Surname || ""}
          onChange={(e) => handleInputChange("Surname", e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T3}
          placeholder="e.g. India"
          value={formData.Nationality || ""}
          onChange={(e) => handleInputChange("Nationality", e.target.value)}
        />
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T4}
          placeholder="e.g. 1992.12"
          value={formData.Birthday || ""}
          onChange={(e) => handleInputChange("Birthday", e.target.value)}
        />
      </div>
      <div style={{ width: "100%" }}>
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T5}
          placeholder="e.g. house number, street, city"
          value={formData.Address || ""}
          onChange={(e) => handleInputChange("Address", e.target.value)}
        />
      </div>
      <div className={styles.subContainer}>
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T6}
          placeholder="e.g. 1234567"
          value={formData.Tel || ""}
          onChange={(e) => handleInputChange("Tel", e.target.value)}
        />
        <QInput
          title={texts.GeberalQ.StdPage.Page5.P5T7}
          placeholder="e.g. xx@gmail.com"
          value={formData.Email || ""}
          onChange={(e) => handleInputChange("Email", e.target.value)}
        />
      </div>
    </div>
  );
}
