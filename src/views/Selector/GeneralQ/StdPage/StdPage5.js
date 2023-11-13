import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage5() {
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
        {texts.GeberalQ.StdPage.Page5.P5Q1}
      </div>
      <div className={styles.Acontainer}>
        {/* <div className={styles.BorderStyle}> */}
        "I am eager to pursue my bachelor's degree at [
          <input 
            style={inputStyle}
            className={styles.inputKeyWords} 
            placeholder='University Name'
            onChange={handleChange}
            />
            ]in Germany due to its outstanding reputation in [
              <input 
            style={{width:'340px'}}
            className={styles.inputKeyWords}
            placeholder='mention the relevant field of study'
            onChange={handleChange}
            />]. The university's strong commitment to academic excellence, coupled with its esteemed faculty members such as [
              <input 
            style={{width:'160px'}}
            className={styles.inputKeyWords}
            placeholder='Professor Name'
            onChange={handleChange}
            />], who specializes in [
              <input 
            style={{width:'250px'}}
            className={styles.inputKeyWords}
            placeholder="Professor's Research Area"
            onChange={handleChange}
            />], aligns perfectly with my academic and career aspirations. Additionally, the university's vibrant and diverse campus community, as well as its location in [
              <input 
            style={{width:'100px'}}
            className={styles.inputKeyWords}
            placeholder="City Name"
            onChange={handleChange}
            />], make it an ideal place for me to embark on my undergraduate journey."
        {/* </div> */}
      </div>
    </div>
  )
}

