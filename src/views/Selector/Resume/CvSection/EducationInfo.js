import React from 'react';

const EducationInfo = ({ cvData, sectionName, styles }) => {
  const educationInfo = cvData.educationInfo;

  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  const Paragraph = ({ title, content }) => {
    return (
      <div className={styles.paragraph}>
        {title && <strong>{title}: </strong>}
        {content}
      </div>
    );
  };

  const EducationInfoItem = ({ edu }) => {
    return (
      <div className={styles.subSection}>
        <Paragraph title={`${edu.curDegree} in ${edu.curMajor}`} />
        <Paragraph content={`${edu.curUni}, ${edu.city}, ${edu.state}`} />
        <Paragraph content={edu.graduationDate} />
      </div>
    );
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {educationInfo.map((edu) => (
        <EducationInfoItem key={edu.id} edu={edu} styles={styles} />
      ))}
    </div>
  );
};

export default EducationInfo;
