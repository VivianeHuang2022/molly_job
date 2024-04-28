import { Heading, Paragraph } from './cvComps/CvTypography';

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

  return (
    <main>
      <Heading text={sectionName} />

      <div className={cvSection}>
        <div className={styles.subSection}>
          <Paragraph
            text={`${getSkills} ${language} ${relevantCertificates}`}
          />

          <Paragraph text={`${getAwards} ${getCompetitions}`} />
          <Paragraph text={`${volunteerWork} ${interest}`} />
        </div>
      </div>
    </main>
  );
};

export default SkillsActivitiesInterests;
