import React from 'react';

const PersonalInfo = ({ cvData, sectionName, title, styles }) => {
  const personalInfo = cvData.personalInfo;
  const { cvSection} = styles;
  const { userTel, userEmail, linkedIn } = title;

  const { firstName, surname } = personalInfo;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  const Paragraph = ({ content }) => {
    return <div className={styles.personalInfoDetails}>{content}</div>;
  };

  const PersonalInfoItem = ({ label, value }) => {
    return <Paragraph content={`${label}: ${value}`} />;
  };

  return (
    <div className={cvSection}>
      <Heading text={`${firstName} ${surname}`} />
      <div className={styles.personalInfoDetails}>
        <PersonalInfoItem label={userTel} value={personalInfo.userTel} />
        <PersonalInfoItem label={userEmail} value={personalInfo.userEmail} />
        <PersonalInfoItem label={linkedIn} value={personalInfo.linkedIn} />
      </div>
    </div>
  );
};

export default PersonalInfo;
