import React, { useRef, useEffect} from 'react';
import texts_EN from '../../../texts'
import texts_CN from '../../../texts_CN'
import styles from './StdPageNew.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateStdData, stdDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action


export default function StdPage5() {
  var formData = useSelector((state) => state.stdDataQP5); 
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const texts = localStorage.getItem("Lan")==="CN"?texts_CN:texts_EN
  const handleDataSave = () => {
    const names = ["internRole","internCompany", "internSkills", "internField", "internTools"];
    names.forEach(name => {
      const span = textRef.current.querySelector(`span[name="${name}"]`);
      if (span) {
        const data = span.innerText.replace('[', '').replace(']', '').trim();
        dispatch(updateStdData({pNum: 5, payload: { [name]: data }}));
        // 本地数据处理
        stdDataSaveHandle(name, data, 5);
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
        {texts.GeberalQ.StdPage.Page5.P5Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer} >
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
          <span type="No">"Furthermore, my internships as a/an </span>
          </span>
          <span name="internRole" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.internRole||"Previous Internship Role"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> at </span>
          </span>
          <span name="internCompany" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.internCompany||"Previous Internship Company"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> enhanced my proficiency in </span>
          </span>
          <span name="internSkills" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.internSkills||"mention relevant skills"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . Additionally, I am proficient in relevant </span>
          </span>
          <span name="internField" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.internField||"specific field"} ]</span>
          {/* <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , such as </span>
          </span>
          <span name="myLanguages" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.myLanguages||"skills: like languages"} ]</span> */}
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> and I have hands-on experience with </span>
          </span>
          <span name="internTools" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.internTools||"mention relevant software/tools"} ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">." </span>
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

