import React, { useState } from 'react';
import EditSectionPage from './ActComponent/EditSectionPage';

const SectionPageSingle = ({ cvData, labels, styles, sectionKey }) => {
  const { sectionName: labelSecName, ...otherLabels } = labels;
  const { sectionName: sectionNameRedux, data } = cvData;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={styles.sectionGroup}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <EditSectionPage
        sectionKey={sectionKey}
        sectionName={sectionNameRedux}
        otherLabels={otherLabels}
        labels={labels}
        data={data}
        styles={styles}
        showButtons={isHovered} // 传递鼠标悬停状态给子组件
      />
    </div>
  );
};

export default SectionPageSingle;
