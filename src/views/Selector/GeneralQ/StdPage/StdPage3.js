import React, { useRef,useEffect } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage3() {
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
        >
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">"I hold a </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ high school, bachelor or master ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> degree in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ your major ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> from </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ the name of your high school or university ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ your home country ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">. where I gained a solid foundation in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ mention your most recent major ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> and developed a strong background in relevant areas of study such as </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ mention relevant subjects or focus ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">, My academic journey has equipped me with the analytical and critical thinking skills necessary for success in the program. Moreover, my coursework in </span>
        </span>
        <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention relevant courses ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> and my research project on </span>
        </span>
        <span style={{color:'green'}} onDoubleClick={handleClearText}>[ If available, please briefly describe your projects ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> have deepened my interest in </span>
        </span>
        <span style={{color:'green'}} onDoubleClick={handleClearText}>[ specific area of your field ]</span>
        </div>
        </div>
      </div>
    </div>
  )
}

