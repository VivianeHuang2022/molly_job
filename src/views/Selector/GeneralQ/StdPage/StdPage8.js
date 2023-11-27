import React, { useRef, useEffect} from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage8() {
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
        {texts.GeberalQ.StdPage.Page8.P8Q1}
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
          <span type="No">"I am proficient in </span>
          </span>
          <span style={{color:'red'}} onDoubleClick={handleClearText}>[ German or English ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> having completed my undergraduate studies in English-medium instruction. Furthermore, I have taken the </span>
          </span>
          <span style={{color:'red'}} onDoubleClick={handleClearText}>[ German and English Language Proficiency Test Name ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> and achieved </span>
          </span>
          <span style={{color:'red'}} onDoubleClick={handleClearText}>[ your score ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">. This language proficiency, in conjunction with my strong communication skills, ensures my ability to actively participate in all aspects of the program at University." </span>
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

