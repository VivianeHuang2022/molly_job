import React, { useRef, useEffect} from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage5() {
  const textRef = useRef(null);

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
        >
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">"I have gained practical experience through internships and research projects, where I further developed my analytical, problem-solving, and teamwork skills. My internships at </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ Previous Internship Company ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> allowed me to work on real-world projects, enhancing my proficiency in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention relevant skills ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . Additionally, I am proficient in relevant </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ specific field ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , such as </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ skills: like languages ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> and I have hands-on experience with </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention relevant software/tools ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . These experiences have equipped me with the skills required to the program and contribute to research and academic endeavors." </span>
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

