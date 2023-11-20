import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage3() {
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
        {texts.GeberalQ.StdPage.Page3.P3Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer}>
        "I hold a [
          <input 
            style={{width:'275px', fontSize:"18px"}}
            className={styles.inputMustKeyWords} 
            placeholder='high school, bachelor or master'
            onChange={handleChange}
            />
            ] degree in [
              <input 
            style={{width:'100px', fontSize:"18px"}}
            className={styles.inputMustKeyWords}
            placeholder='your major'
            onChange={handleChange}
            />] from [
              <input 
            style={{width:'370px', fontSize:"18px"}}
            className={styles.inputMustKeyWords}
            placeholder='the name of your high school or university'
            onChange={handleChange}
            />] in [
                <input 
              style={{width:'100px', fontSize:"18px"}}
              className={styles.inputMustKeyWords}
              placeholder='your home country'
              onChange={handleChange}
              />]. where I gained a solid foundation in [
              <input 
            style={{width:'280px', fontSize:"18px"}}
            className={styles.inputMustKeyWords}
            placeholder="mention your most recent major"
            onChange={handleChange}
            />] and developed a strong background in relevant areas of study such as [
                <input 
              style={{width:'300px', fontSize:"18px"}}
              className={styles.inputMustKeyWords}
              placeholder="mention relevant subjects or focus"
              onChange={handleChange}
              />], My academic journey has equipped me with the analytical and critical thinking skills necessary for success in the program. Moreover, my coursework in [
                <input 
              style={{width:'220px', fontSize:"18px"}}
              className={styles.inputKeyWords}
              placeholder="mention relevant courses"
              onChange={handleChange}
              />] and my research project on [
                <input 
              style={{width:'410px', fontSize:"18px"}}
              className={styles.inputKeyWords}
              placeholder="If available, please briefly describe your project"
              onChange={handleChange}
              />] have deepened my interest in [
                <input 
              style={{width:'220px', fontSize:"18px"}}
              className={styles.inputKeyWords}
              placeholder="specific area of your field"
              onChange={handleChange}
              />]."
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

