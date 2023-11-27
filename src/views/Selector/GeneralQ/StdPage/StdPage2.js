import React, { useEffect, useRef} from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage2() {
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
        {texts.GeberalQ.StdPage.Page2.P2Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
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
          <span type="No">"I am enthusiastic about pursuing my </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ Bachelor, Master, Phd ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <span type="No"> degree at </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ the University Name under Application ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <span type="No"> in Germany due to its distinguished reputation in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ mention the relevant field of study ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <span type="No">. Additionally, the university's diverse and inclusive academic environment and its location in </span>
        </span>
        <span style={{color:'red'}} onDoubleClick={handleClearText}>[ City Name ]</span>
        <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <span type="No"> make it an ideal place for me to further my studies and research." </span>
        </span>
      </div>
        </div>
      </div>
    </div>
  )
}

