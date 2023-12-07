import React, { useRef,useEffect } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateStdData, stdDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action

export default function StdPage4() {
  
  var formData = useSelector((state) => state.stdDataQP4); 
  const textRef = useRef(null);
  const dispatch = useDispatch();

  const handleDataSave = () => {
    const names = ["getProject", "getConference", "getAwards", "getCompetitions", "getSkills"];
    names.forEach(name => {
      const span = textRef.current.querySelector(`span[name="${name}"]`);
      if (span) {
        const data = span.innerText.replace('[', '').replace(']', '').trim();
        dispatch(updateStdData({pNum: 4, payload: { [name]: data }}));
        // 本地数据处理
        stdDataSaveHandle(name, data, 4);
      }
    });
  };

  const handleClearText = (event) => {
    event.target.innerText = '[ ';
      const span = event.target;

    // 创建一个空的文本节点并插入到 span 中
    const textNode = document.createTextNode(' ]');
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
    var stdDataQP1 = localStorage.getItem("stdDataQP2")?JSON.parse(localStorage.getItem("stdDataQP1")):{};
    useEffect(() => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (!textRef.current.querySelector('span[type="No"]')) {
            // 撤销操作
            document.execCommand('undo');
          }
        });
      });

      observer.observe(textRef.current, { childList: true, subtree: true });

      return () => observer.disconnect();
    }, []);
  return (
    <div className={styles.container}>
      <div className={styles.QContainer}>
        {texts.GeberalQ.StdPage.Page4.P4Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer}>
        <div
        className={styles.contentEditableDiv}
        ref={textRef}
        contentEditable
        style={{ 
          whiteSpace: 'pre-wrap'
        }}
        onInput={handleDataSave}
        >
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">"During my studies, I had the opportunity to engage in a research project focused on </span>
          </span>
          <span name="getProject" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.getProject||"If available, describe the project"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> This research endeavor culminated in a published paper in </span>
          </span>
          <span name="getConference" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.getConference||"mention the journal or conference"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , and I was honored with the </span>
          </span>
          <span name="getAwards" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.getAwards||"mention any awards or recognition"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> for my contributions. Furthermore, I have been involved in </span>
          </span>
          <span name="getCompetitions" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.getCompetitions||"mention volunteer work or competitions"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , which enriched my practical understanding of </span>
          </span>
          <span name="getSkills" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.getSkills||"specific research area or skill"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . These experiences have not only expanded my knowledge in </span>
          </span>
          <span style={{color:'black'}} onDoubleClick={handleClearText}>[ {stdDataQP1.drMajor||"specific research area"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">." </span>
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

