import React, { useRef, useEffect } from "react";
import texts_EN from "../../../texts";
import texts_CN from "../../../texts_CN";
import styles from "./StdPageNew.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateStdData, stdDataSaveHandle } from "../../../../redux/slice"; // 导入你的 action

export default function StdPage3() {
  var formData = useSelector((state) => state.stdDataQP3);
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const texts = localStorage.getItem("Lan") === "CN" ? texts_CN : texts_EN;
  const handleDataSave = () => {
    const names = [
      "getProject",
      "getConference",
      "getAwards",
      "getCompetitions",
      "getSkills",
      "internRole",
      "internCompany",
    ];
    //what is the 3?
    names.forEach((name) => {
      const span = textRef.current.querySelector(`span[name="${name}"]`);
      if (span) {
        const data = span.innerText.replace("[", "").replace("]", "").trim();
        dispatch(updateStdData({ pNum: 3, payload: { [name]: data } }));
        // 本地数据处理
        stdDataSaveHandle(name, data, 3);
      }
    });
  };

  const handleClearText = (event) => {
    event.target.innerText = "[ ";
    const span = event.target;

    // 创建一个空的文本节点并插入到 span 中
    const textNode = document.createTextNode(" ]");
    span.appendChild(textNode);

    // 创建范围（Range）对象，并将其设置为刚刚创建的空文本节点
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 0); // 1 表示空白节点的长度

    // 获取当前的选择对象并将其更改为新的范围
    const selection = window.getSelection();
    selection.removeAllRanges(); // 清除任何现有的选择
    selection.addRange(range);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!textRef.current.querySelector('span[type="No"]')) {
          // 撤销操作
          document.execCommand("undo");
        }
      });
    });

    observer.observe(textRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.QContainer}>
        {texts.GeberalQ.StdPage.Page3.P3Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        <div className={styles.Acontainer}>
          <div
            className={styles.contentEditableDiv}
            ref={textRef}
            contentEditable
            style={{
              whiteSpace: "pre-wrap",
            }}
            onInput={handleDataSave}
          >
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            ></span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">
                "During my studies, I had the opportunity to engage in a
                research project focused on{" "}
              </span>
            </span>
            <span
              name="getProject"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.getProject || "If available, describe the project"} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">
                {" "}
                This research endeavor culminated in a published paper in{" "}
              </span>
            </span>
            <span
              name="getConference"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.getConference || "mention the journal or conference"}{" "}
              ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No"> , and I was honored with the </span>
            </span>
            <span
              name="getAwards"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.getAwards || "mention any awards or recognition"} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">
                {" "}
                for my contributions. Furthermore, I have been involved in{" "}
              </span>
            </span>
            <span
              name="getCompetitions"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [{" "}
              {formData.getCompetitions ||
                "mention volunteer work or competitions"}{" "}
              ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">
                {" "}
                , which enriched my practical understanding of{" "}
              </span>
            </span>
            <span
              name="getSkills"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.getSkills || "specific research area or skill"} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">
                {" "}
                . These experiences have not only expanded my knowledge in{" "}
              </span>
            </span>
            {/* <span name="curProjects" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.curProjects||"If available, please briefly describe your projects"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> have deepened my interest in </span>
        </span>
        <span name="curInterests" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.curInterests||"specific area of your field"} ]</span> */}
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">"Furthermore, my internships as a/an </span>
            </span>
            <span
              name="internRole"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.internRole || "Previous Internship Role"} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No"> at </span>
            </span>
            <span
              name="internCompany"
              style={{ color: "green" }}
              onDoubleClick={handleClearText}
            >
              [ {formData.internCompany || "Previous Internship Company"} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No"> enhanced my proficiency in this industry</span>
            </span>

            {/* <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , such as </span>
          </span>
          <span name="myLanguages" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.myLanguages||"skills: like languages"} ]</span> */}

            <span
              contentEditable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              <span type="No">." </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
