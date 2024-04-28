import stylesArray from '../styles/index';

const styles = stylesArray[0];

export const KeyTile = ({ text }) => {
  return <div className={styles.keyTile}>{text}</div>;
};

export const Heading = ({ text }) => {
  return <div className={styles.heading}>{text}</div>;
};

export const SubHeading = ({ text, subHeadingStyle }) => {
  return <div className={styles.subHeading}>{text}</div>;
};

export const Paragraph = ({ text, paragraphStyle }) => {
  return <div className={styles.paragraph}>{text}</div>;
};
