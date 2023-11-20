import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage8() {
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
        {texts.GeberalQ.StdPage.Page8.P8Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer} >
        "I am proficient in [
          <input 
            style={{width:'180px'}}
            className={styles.inputMustKeyWords} 
            placeholder='German or English '
            onChange={handleChange}
            />
            ] having completed my undergraduate studies in English-medium instruction. Furthermore, I have taken the [
              <input 
            style={{width:'490px',fontSize:'19px'}}
            className={styles.inputMustKeyWords}
            placeholder='German and English Language Proficiency Test Name'
            onChange={handleChange}
            />] and achieved [
              <input 
            style={{width:'100px'}}
            className={styles.inputMustKeyWords}
            placeholder='your score'
            onChange={handleChange}
            />]. This language proficiency, in conjunction with my strong communication skills, ensures my ability to actively participate in all aspects of the program at University.""
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

