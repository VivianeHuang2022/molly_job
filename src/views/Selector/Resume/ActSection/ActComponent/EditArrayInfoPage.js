import CollapsePanel from '../../../../../components/CollapsePanel';
import InputHandler from './InputHandler';

const EditArrayInfoPage = ({
  sectionName,
  otherLabels,
  labels,
  item,
  styles,
  sectionKey,
}) => {
  const allLabelKeys = Object.keys(otherLabels);

  const PanelContent = (
    <div className={styles.sectionGroupContent}>
      <InputHandler
        labels={labels}
        data={item}
        sectionKey={sectionKey}
        styles={styles}
        labelArray={allLabelKeys}
        itemId={item.id}
      />
    </div>
  );

  return (
    <div className={styles.collapsePanel}>
      <CollapsePanel
        sectionName={` ${sectionName} ${item.id}`}
        PanelContent={PanelContent}
        sectionKey={sectionKey}
        itemId={item.id}
      />
    </div>
  );
};

export default EditArrayInfoPage;
