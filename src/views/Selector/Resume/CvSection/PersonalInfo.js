import { Heading, Paragraph, SubHeading } from './cvComps/CvTypography';

const PersonalInfo = ({ cvData, sectionName, title, styles }) => {
  const { cvSection } = styles;
  const { userTel, userEmail, userLinkedln } = title;

  const { firstName, surname } = cvData;

  const PersonalInfoItem = ({ label, value }) => {
    return <Paragraph text={`${label}: ${value}`} />;
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
