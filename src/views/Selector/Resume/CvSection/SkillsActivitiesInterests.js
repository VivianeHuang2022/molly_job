import { Heading, Paragraph, SubHeading } from './cvComps/CvTypography';

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

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      <div className={styles.subSection}>
        <Paragraph text={language} />
        <Paragraph text={getSkills} />
        <Paragraph text={relevantCertificates} />
        <Paragraph text={volunteerWork} />
        <Paragraph text={interest} />
        <Paragraph text={getAwards} />
        <Paragraph text={getCompetitions} />
      </div>
    </div>
  );
};

export default SkillsActivitiesInterests;
