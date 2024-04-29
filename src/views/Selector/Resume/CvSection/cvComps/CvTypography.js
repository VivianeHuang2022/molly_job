import stylesArray from '../styles/index';

const styles = stylesArray[0];

export const KeyTile = ({ text }) => {
  return <div className={styles.keyTile}>{text}</div>;
};

const formatItems = (items) => {
  return items.filter((item) => item).join(', ');
};

/*-----------标题------------*/
export const Heading = ({ text }) => {
  return <div className={styles.heading}>{text}</div>;
};

export const SubHeading = ({ text }) => {
  return <div className={styles.subHeading}>{text}</div>;
};

export const SubHeadingArray = ({ text }) => {
  return <div className={styles.subHeading}>{formatItems(text)}</div>;
};

/*-----------段落------------*/

export const HorizontalLayout = ({ children }) => {
  return <div className={styles.horizontalLayout}>{children}</div>;
};

export const Paragraph = ({ text }) => {
  return <div className={styles.paragraph}>{text}</div>;
};

export const ParagraphArray = ({ text }) => {
  return <div className={styles.paragraph}>{formatItems(text)}</div>;
};

export const ParagraphList = ({ text }) => {
  // 假设text是一个包含多行文本的字符串，我们按照行将其拆分
  const lines = text.split('\n');

  // 使用map函数为每一行文本添加Paragraph组件
  const listItems = lines.map((line, index) => (
    <Paragraph text={`● ${line}`} />
  ));

  return <div className="paragraph-list">{listItems}</div>;
};

export const MiniParagraph = ({ text }) => {
  return <div className={styles.miniParagraph}>{text}</div>;
};
