import React from 'react';

const SkillsActivitiesInterests = ({ cvData, sectionName, styles }) => {
  const {
    language,
    getSkills,
    relevantCertificates,
    volunteerWork,
    interest,
    getAwards,
    getCompetitions,
  } = cvData;
  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  // const SubHeading = ({ text }) => {
  //   return <div className={styles.SubHeading}>{text}</div>;
  // };

  // const Paragraph = ({ content, title }) => {
  //   return (
  //     <div className={styles.paragraph}>
  //       {title && <strong>{title}: </strong>}
  //       {content}
  //     </div>
  //   );
  // };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      <div className={styles.subSection}>
        {language && <div>Languages: {language}</div>}
        {getSkills && <div>Skills: {getSkills}</div>}
        {relevantCertificates && (
          <div>Certificates: {relevantCertificates}</div>
        )}
        {volunteerWork && <div>Volunteer Work: {volunteerWork}</div>}
        {interest && <div>Interests: {interest}</div>}
        {getAwards && <div>Awards: {getAwards}</div>}
        {getCompetitions && <div>Competitions: {getCompetitions}</div>}
      </div>
    </div>
  );
};

export default SkillsActivitiesInterests;
