import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLabels } from '../local';
import styles from './Home.module.css';
import studyShowImg from '../../assets/images/studyShowImg.png';
import careerShowImg from '../../assets/images/careerShowImg.png';
import {
  switchLanguage,
  selectCurrentLanguage,
} from '../../redux/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();

  const currentLanguage = useSelector(selectCurrentLanguage);
  const texts = getLabels(currentLanguage);
  const handleTorecommendation = () => {
    navigate('/layout/recommendation');
  };
  const handleToCoverLetter = () => {
    navigate('/layout/coverletter/edit'); //0509 lily 这里如果不加edit会跳转至生成页
  };
  const handleToResume = () => {
    navigate('/layout/resume');
  };
  const handleToUniGuide = () => {
    window.location.href = 'https://stu-de.org/';
  };
  const { Id } = useParams();
  localStorage.setItem('topicId', Id);

  return (
    <div className={styles.backgroudStyle}>
      <div className={styles.containerStyle}>
        <div className={styles.listStyle}>
          <div
            className={styles.topTitle}
            style={Id === '1' ? { color: 'cyan' } : { color: 'black' }}
          >
            {Id === '1'
              ? texts.homeTexts.studyTitle
              : texts.homeTexts.careerTitle}
          </div>

          <button
            className={styles.buttonStyle}
            style={
              Id === '1'
                ? { background: 'darkgray' }
                : { background: 'saddlebrown' }
            }
            onClick={handleToCoverLetter}
          >
            {texts.homeTexts.coverletterTxt}
          </button>

          <button
            className={styles.buttonStyle}
            style={
              Id === '1' ? { background: 'gray' } : { background: 'darkgray' }
            }
            onClick={handleTorecommendation}
          >
            {Id === '1'
              ? texts.homeTexts.applicationTxt
              : texts.homeTexts.interviewTxt}
          </button>

          <button
            className={styles.buttonStyle}
            style={{ background: 'black' }}
            onClick={handleToResume}
          >
            {texts.homeTexts.resumeTxt}
          </button>
          {Id === '1' && (
            <button
              className={styles.buttonStyle}
              style={{ background: '#0097b2' }}
              onClick={handleToUniGuide}
            >
              {texts.homeTexts.uniGuidTxt}
            </button>
          )}
        </div>
        <img
          src={Id === '1' ? studyShowImg : careerShowImg}
          alt="showImg"
          className={styles.showImg}
          style={Id === '2' ? { marginRight: '3%' } : null}
        ></img>
      </div>
    </div>
  );
}
