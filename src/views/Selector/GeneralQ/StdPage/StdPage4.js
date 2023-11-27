import React, { useRef,useEffect } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage4() {
  
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
        >
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No">"During my studies, I had the opportunity to engage in a research project focused on </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ describe the project ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> This research endeavor culminated in a published paper in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention the journal or conference ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , and I was honored with the </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention any awards or recognition ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> for my contributions. Furthermore, I have been involved in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ mention volunteer work or competitions ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> , which enriched my practical understanding of </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ specific research area or skill relevant to the volunteer work/competition ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> . These experiences have not only expanded my knowledge in </span>
          </span>
          <span style={{color:'green'}} onDoubleClick={handleClearText}>[ specific research area ]</span>
          <span contentEditable={false} style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <span type="No"> but have also reinforced my commitment to pursuing advanced studies and making significant contributions to the field." </span>
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

