import stylesArray from '../styles/index';

const styles = stylesArray[0];

export const Heading = ({ text }) => {
  return <div className={styles.cvSectionHeading}>{text}</div>;
};

export const SubHeading = ({ text, subHeadingStyle }) => {
  return <div className={styles.SubHeading}>{text}</div>;
};

export const Paragraph = ({ text, paragraphStyle }) => {
  return <div className={styles.paragraph}>{text}</div>;
};
