// import { getLabels } from '../local';
// import { useSelector } from 'react-redux';
// import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { SecParagraphComp } from '../../components/Typography';
import styles from './about.module.css';

const About = () => {
  // const texts = getLabels(useSelector(selectCurrentLanguage));

  //待适配语言
  return (
    <div className={styles.pageContainer}>
      <SecParagraphComp>About Us</SecParagraphComp>
      <h1>Welcome to Molly Job!</h1>
      <p>
        If you have any questions, please feel free to contact us at any time:
      </p>
      <h3>viviane.huang@stu-de.org</h3>
    </div>
  );
};

export default About;
