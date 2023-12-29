import React, { useRef,useEffect } from 'react';
import texts_EN from '../../../texts'
import texts_CN from '../../../texts_CN'
import styles from './StdPageNew.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateStdData, stdDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action


export default function StdPage3() {
  var formData = useSelector((state) => state.stdDataQP3); 
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const texts = localStorage.getItem("Lan")==="CN"?texts_CN:texts_EN
  const handleDataSave = () => {
    const names = ["curDegree", "curMajor", "curUni", "curCountry", "curFocus", "curCourses", "curProjects", "curInterests"];
    names.forEach(name => {
      const span = textRef.current.querySelector(`span[name="${name}"]`);
      if (span) {
        const data = span.innerText.replace('[', '').replace(']', '').trim();
        dispatch(updateStdData({pNum: 3, payload: { [name]: data }}));
        // 本地数据处理
        stdDataSaveHandle(name, data, 3);
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
        {texts.GeberalQ.StdPage.Page3.P3Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
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
          <span type="No">"I hold a </span>
        </span>
        <span name="curDegree" style={{color:'red'}} onDoubleClick={handleClearText}>[ {formData.curDegree||"high school, bachelor or master"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> degree in </span>
        </span>
      <span name="curMajor" style={{color:'red'}} onDoubleClick={handleClearText}>[ {formData.curMajor||"your major"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> from </span>
        </span>
        <span name="curUni" style={{color:'red'}} onDoubleClick={handleClearText}>[ {formData.curUni||"the name of your high school or university "}]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> in </span>
        </span>
        <span name="curCountry" style={{color:'red'}} onDoubleClick={handleClearText}>[ {formData.curCountry||"the country you studied"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">. where I gained a solid foundation in my major and developed a strong background in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ {formData.curMajor||"your major"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">. Moreover, my coursework in </span>
        </span>
        <span name="curCourses" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.curCourses||"mention 2-3 relevant courses"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> have deepened my interest in this field" </span>
        </span>
        {/* <span name="curProjects" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.curProjects||"If available, please briefly describe your projects"} ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> have deepened my interest in </span>
        </span>
        <span name="curInterests" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.curInterests||"specific area of your field"} ]</span> */}
        </div>
        </div>
      </div>
    </div>
  )
}

