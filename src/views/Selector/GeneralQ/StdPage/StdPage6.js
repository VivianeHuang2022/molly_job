import React, { useRef,useEffect } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage6() {
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
        {texts.GeberalQ.StdPage.Page6.P6Q1}
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
          <span type="No">"The program at </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ University Name ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> aligns seamlessly with my academic interests, especially in courses like [specific courses or research areas] that fuel my passion for </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ academic interests ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . I'm inspired by the university's academic excellence and faculty expertise, particularly </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ Professor Name ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ Professor's Research Area ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> These elements, combined with research opportunities, resonate with my career goals, and I'm eager to advance my expertise in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ the major you applied ]</span>
        </div>
        </div>
      </div>
    </div>
  )
}

