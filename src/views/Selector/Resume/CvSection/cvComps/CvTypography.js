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
      const listItems = lines.map((line, index) => (
        <div key={index} className={styles.listItem}>
          <div className={styles.li}></div>
          <div className={styles.listValue}>
            <Paragraph text={line} styles={styles} />
          </div>
        </div>
      ));

      return <div className={styles.ul}>{listItems}</div>;
    }
  }

  return null; // 如果没有文本，则不渲染任何内容
};

export const MiniParagraph = ({ text, styles }) => {
  return <div className={styles.miniParagraph}>{text}</div>;
};
