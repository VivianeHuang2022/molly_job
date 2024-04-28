import { Heading, Paragraph } from './cvComps/CvTypography';

const PublicationsPresentations = ({ cvData, sectionName, styles }) => {
  const publicationsPresentations = cvData;

  const { cvSection } = styles;

  const PublicationPresentationItem = ({ publicationPresentation }) => {
    const { getConference } = publicationPresentation;

    return (
      <div className={styles.subSection}>
        <Paragraph text={getConference} />
      </div>
    );
  };

  return (
    <main>
      <Heading text={sectionName} />

      <div className={cvSection}>
        {publicationsPresentations.map((publicationPresentation, index) => (
          <PublicationPresentationItem
            key={index}
            publicationPresentation={publicationPresentation}
            styles={styles}
          />
        ))}
      </div>
    </main>
  );
};

export default PublicationsPresentations;
