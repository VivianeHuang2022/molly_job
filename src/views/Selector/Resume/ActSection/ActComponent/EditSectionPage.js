import SectionName from './SectionName';
import InputHandler from './InputHandler';

const EditSectionPage = ({
  sectionName,
  otherLabels,
  labels,
  data,
  styles,
  sectionKey,
  showButtons, // 新增属性，控制按钮的显示
}) => {
  const allLabelKeys = Object.keys(otherLabels);

  return (
    <div>
      <SectionName
        sectionName={sectionName}
        sectionKey={sectionKey}
        showButtons={showButtons}
      />
      <div className={styles.sectionGroupContent}>
        <InputHandler
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
