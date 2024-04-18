import React from 'react';

const EducationInfo = ({ cvData, sectionName, styles }) => {
  const educationInfo = cvData;

  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  const Paragraph = ({ title, content }) => {
    return (
      <div className={styles.paragraph}>
        {title && <strong>{title} </strong>}
        {content}
      </div>
    );
  };

  const EducationInfoItem = ({ edu }) => {
    return (
      <div className={styles.subSection}>
        {edu.currentCountry}
        <Paragraph title={`${edu.currentDegree}  ${edu.currentMajor}`} />
        <Paragraph content={`${edu.currentUni} ${edu.city} ${edu.state}`} />
        <Paragraph content={edu.graduationDate} />
        {edu.currentGPA} {edu.achievement}
        {edu.currentCourses}
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
