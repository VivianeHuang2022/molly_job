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
      <Heading text={sectionName} styles={styles} />

      <div className={cvSection}>
        <div className={styles.subSection}>
          <Paragraph
            text={`${getSkills} ${language} ${relevantCertificates}`}
            styles={styles}
          />

          <Paragraph text={`${getAwards} ${getCompetitions}`} styles={styles} />
          <Paragraph text={`${volunteerWork} ${interest}`} styles={styles} />
        </div>
      </div>
    </main>
  );
};

export default SkillsActivitiesInterests;
