export const KeyTile = ({ text, styles }) => {
  return <div className={styles.keyTile}>{text}</div>;
};

const formatItems = (items) => {
  return items.filter((item) => item).join(', ');
};

/*-----------标题------------*/
export const Heading = ({ text, styles }) => {
  return <div className={styles.heading}>{text}</div>;
};

export const SubHeading = ({ text, styles }) => {
  return <div className={styles.subHeading}>{text}</div>;
};

export const SubHeadingArray = ({ text, styles }) => {
  return <div className={styles.subHeading}>{formatItems(text)}</div>;
};

/*-----------段落------------*/

export const HorizontalLayout = ({ children, styles }) => {
  return <div className={styles.horizontalLayout}>{children}</div>;
};

export const Paragraph = ({ text, styles }) => {
  return <div className={styles.paragraph}>{text}</div>;
};

export const ParagraphArray = ({ text, styles }) => {
  return <div className={styles.paragraph}>{formatItems(text)}</div>;
};

export const ParagraphList = ({ text, styles }) => {
  // 假设text是一个包含多行文本的字符串，我们按照行将其拆分
  if (text) {
    const lines = text.split('\n');

    if (lines) {
      // 使用map函数为每一行文本添加Paragraph组件
      const listItems = lines.map((line, index) => (
        <Paragraph key={index} text={`● ${line}`} styles={styles} />
      ));

      return <div className="paragraph-list">{listItems}</div>;
    }
  }
};

export const MiniParagraph = ({ text, styles }) => {
  return <div className={styles.miniParagraph}>{text}</div>;
};
