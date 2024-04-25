import SectionName from './SectionName';
import InputHandler from './InputHandler';

const EditSectionPage = ({
  sectionName,
  otherLabels,
  labels,
  data,
  styles,
  sectionKey,
}) => {
  const allLabelKeys = Object.keys(otherLabels);

  return (
    <div>
      <SectionName sectionName={sectionName} sectionKey={sectionKey} />
      <div className={styles.sectionGroupContent}>
        <InputHandler
          labelKeys={otherLabels}
          labels={labels}
          sectionKey={sectionKey}
          styles={styles}
          data={data}
          labelArray={allLabelKeys}
        />
      </div>
    </div>
  );
};

export default EditSectionPage;
