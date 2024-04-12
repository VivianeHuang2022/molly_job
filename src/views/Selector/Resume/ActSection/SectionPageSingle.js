import React from 'react';
import EditSectionPage from './ActComponent/EditSectionPage';
import SectionName from './ActComponent/SectionName';

const SectionPageSingle = ({ cvData, labels, styles, sectionKey }) => {
  const { sectionName: labelSecName, ...otherLabels } = labels;
  const { sectionName: sectionNameRedux, data } = cvData;

  return (
    <div className={styles.sectionGroup}>
      <EditSectionPage
        sectionKey={sectionKey}
        sectionName={sectionNameRedux}
        otherLabels={otherLabels}
        labels={labels}
        data={data}
        styles={styles}
      />
    </div>
  );
};

export default SectionPageSingle;
