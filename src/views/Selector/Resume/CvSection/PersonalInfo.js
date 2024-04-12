import React from 'react';

const PersonalInfo = ({ cvData, sectionName, title, styles }) => {
  const { cvSection } = styles;
  const { userTel, userEmail, userLinkedln } = title;

  const { firstName, surname } = cvData;

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
        <PersonalInfoItem label={userTel} value={cvData.userTel} />
        <PersonalInfoItem label={userEmail} value={cvData.userEmail} />
        {cvData.userLinkedln && (
          <PersonalInfoItem label={userLinkedln} value={cvData.userLinkedln} />
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
