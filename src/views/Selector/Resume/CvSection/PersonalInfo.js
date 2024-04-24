import { Heading, Paragraph } from './cvComps/CvTypography';

const PersonalInfo = ({ cvData, sectionName, title, styles }) => {
  // 解构styles对象
  const { cvSection, personalInfoDetails } = styles;

  // 进一步解构cvData对象，提取可能需要的属性
  const { firstName, surname, userTel, userEmail, userLinkedln } = cvData;

  return (
    <div className={cvSection}>
      <Heading text={`${firstName} ${surname}`} />
      <div className={personalInfoDetails}>
        <Paragraph text={userTel} />
        <Paragraph text={userEmail} />
        <Paragraph text={userLinkedln} />
      </div>
    </div>
  );
};

export default PersonalInfo;