import React from 'react';

const PublicationsPresentations = ({ cvData, sectionName, styles }) => {
  const publicationsPresentations = cvData;

  const { cvSection } = styles;

  const Heading = ({ text }) => {
    return <div className={styles.cvSectionHeading}>{text}</div>;
  };

  const PublicationPresentationItem = ({ publicationPresentation }) => {
    const { getConference } = publicationPresentation;

    return (
      <div className={styles.subSection}>
        <strong>Conference:</strong> {getConference}
        {/* You can add more fields here depending on your data structure */}
      </div>
    );
  };

  return (
    <div className={cvSection}>
      <Heading text={sectionName} />
      {publicationsPresentations.map((publicationPresentation, index) => (
        <PublicationPresentationItem
          key={index}
          publicationPresentation={publicationPresentation}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default PublicationsPresentations;
