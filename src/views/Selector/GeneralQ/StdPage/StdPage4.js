import React, { useRef, useEffect } from 'react';
import { getLabels } from '../../../local'; // 导入语言配置文件加载函数
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';
import styles from './StdPageNew.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateStdData, stdDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action

export default function StdPage6() {
  var formData = useSelector((state) => state.coverLetter.stdDataQP4);
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const handleDataSave = () => {
    const names = ['careerOrGoal', 'profName', 'profResearch'];
    names.forEach((name) => {
      const span = textRef.current.querySelector(`span[name="${name}"]`);
      if (span) {
        const data = span.innerText.replace('[', '').replace(']', '').trim();
        dispatch(updateStdData({ pNum: 4, payload: { [name]: data } }));
        // 本地数据处理
        stdDataSaveHandle(name, data, 4);
      }
    });
  };
  var stdDataQP1 = localStorage.getItem('stdDataQP1')
    ? JSON.parse(localStorage.getItem('stdDataQP1'))
    : {};
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
        <div className={styles.Acontainer}>
          <div
            className={styles.contentEditableDiv}
            ref={textRef}
            contentEditable
            style={{
              whiteSpace: 'pre-wrap',
            }}
            onInput={handleDataSave}
          >
            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No">{texts.GeberalQ.StdPage.Page4.P4T1} </span>
            </span>
            <span
              name="profUni"
              style={{ color: 'green' }}
              onDoubleClick={handleClearText}
            >
              [ {stdDataQP1.drUni || texts.GeberalQ.StdPage.Page2.AppliedUni} ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No"> {texts.GeberalQ.StdPage.Page4.P4T2} </span>
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No"> {texts.GeberalQ.StdPage.Page4.P4T3} </span>
            </span>
            <span style={{ color: 'green' }} onDoubleClick={handleClearText}>
              [{' '}
              {stdDataQP1.drMajor || texts.GeberalQ.StdPage.Page2.AppliedMajor}{' '}
              ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No"> {texts.GeberalQ.StdPage.Page4.P4T4} </span>
            </span>

            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No">. </span>
            </span>

            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No">{texts.GeberalQ.StdPage.Page4.P4T6} </span>
            </span>
            <span
              name="careerOrGoal"
              style={{ color: 'red' }}
              onDoubleClick={handleClearText}
            >
              [{' '}
              {formData.careerOrGoal || texts.GeberalQ.StdPage.Page4.CareerGoal}{' '}
              ]
            </span>
            <span
              contentEditable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              <span type="No">
                {' '}
                {texts.GeberalQ.StdPage.Page4.P4T7}
                {''}
              </span>
            </span>

            {/* <span name="profMajor" style={{color:'green'}} onDoubleClick={handleClearText}>[ {formData.profMajor||"the major you applied"} ]</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
