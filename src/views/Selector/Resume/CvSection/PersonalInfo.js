import { KeyTile, Paragraph } from './cvComps/CvTypography';

const PersonalInfo = ({ cvData, sectionName, title, styles }) => {
  // 解构styles对象
  const { nameSection, personalInfoDetails } = styles;

  // 进一步解构cvData对象，提取可能需要的属性
  const { firstName, surname, userTel, userEmail, userLinkedln } = cvData;

  return (
    <main className={nameSection}>
      <KeyTile text={`${firstName} ${surname}`} styles={styles} />
      <div className={personalInfoDetails}>
        <Paragraph text={userTel} styles={styles} />
        <Paragraph text={userEmail} styles={styles} />
        <Paragraph text={userLinkedln} styles={styles} />
      </div>
    </main>
  );
};

export default PersonalInfo;
