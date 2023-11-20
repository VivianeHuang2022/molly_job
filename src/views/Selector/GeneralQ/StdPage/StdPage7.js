import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage7() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const charWidth = 14;
  const inputWidth = Math.max(160, inputValue.length * charWidth) + "px";

  const inputStyle = {
    // border: `1px solid ${isFocused||hasInput ? 'rgb(32, 206, 232)' : 'rgb(32, 206, 232)'}`,
    // border: ${isFocused||hasInput?}
    width:inputWidth
  };
  return (
    <div className={styles.container}>
      <div className={styles.QContainer}>
        {texts.GeberalQ.StdPage.Page7.P7Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer} >
        "My long-term career goal is to [
          <input 
            style={{width:'370px'}}
            className={styles.inputMustKeyWords} 
            placeholder='describe your career or academic goal'
            onChange={handleChange}
            />
            ] and I firmly believe that the study from the university will play a pivotal role in achieving this objective. The program's focus on [
              <input 
            style={{width:'270px'}}
            className={styles.inputKeyWords}
            placeholder='mention program strengths'
            onChange={handleChange}
            />] will provide me with the expertise required to excel in my desired career field. I am excited to harness the knowledge and network I will gain during my studies to make a meaningful impact in the [
              <input 
            style={{width:'375px'}}
            className={styles.inputKeyWords}
            placeholder='your intended career or academic field'
            onChange={handleChange}
            />] and contribute to the academic community.""
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

