import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage6() {
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
        {texts.GeberalQ.StdPage.Page6.P6Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer} >
        "The program at [
          <input 
            style={{width:'160px'}}
            className={styles.inputKeyWords} 
            placeholder='University Name'
            onChange={handleChange}
            />
            ] aligns seamlessly with my academic interests, especially in courses like [specific courses or research areas] that fuel my passion for [
              <input 
            style={{width:'180px'}}
            className={styles.inputKeyWords}
            placeholder='academic interests'
            onChange={handleChange}
            />]. I'm inspired by the university's academic excellence and faculty expertise, particularly [
              <input 
            style={{width:'155px'}}
            className={styles.inputKeyWords}
            placeholder='Professor Name'
            onChange={handleChange}
            />] in [
              <input 
            style={{width:'250px'}}
            className={styles.inputKeyWords}
            placeholder="Professor's Research Area"
            onChange={handleChange}
            />] These elements, combined with research opportunities, resonate with my career goals, and I'm eager to advance my expertise in [
              <input 
            style={{width:'210px'}}
            className={styles.inputKeyWords}
            placeholder="the major you applied"
            onChange={handleChange}
            />]."
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

