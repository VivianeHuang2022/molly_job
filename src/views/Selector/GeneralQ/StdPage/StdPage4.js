import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage4() {
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
        {texts.GeberalQ.StdPage.Page4.P4Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer}>
        "During my studies, I had the opportunity to engage in a research project focused on [
          <input 
            style={{width:'180px', fontSize:"18px"}}
            className={styles.inputKeyWords} 
            placeholder='describe the project'
            onChange={handleChange}
            />
            ] This research endeavor culminated in a published paper in [
              <input 
            style={{width:'300px', fontSize:"18px"}}
            className={styles.inputKeyWords}
            placeholder='mention the journal or conference'
            onChange={handleChange}
            />], and I was honored with the [
              <input 
            style={{width:'310px', fontSize:"18px"}}
            className={styles.inputKeyWords}
            placeholder='mention any awards or recognition'
            onChange={handleChange}
            />] for my contributions. Furthermore, I have been involved in  [
              <input 
            style={{width:'350px', fontSize:"18px"}}
            className={styles.inputKeyWords}
            placeholder="mention volunteer work or competitions"
            onChange={handleChange}
            />], which enriched my practical understanding of  [
                <input 
              style={{width:'600px', fontSize:"17px"}}
              className={styles.inputKeyWords}
              placeholder="specific research area or skill relevant to the volunteer work/competition"
              onChange={handleChange}
              />]. These experiences have not only expanded my knowledge in [
                <input 
              style={{width:'190px', fontSize:"18px"}}
              className={styles.inputKeyWords}
              placeholder="specific research area"
              onChange={handleChange}
              />] but have also reinforced my commitment to pursuing advanced studies and making significant contributions to the field."
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}

