import { useDispatch } from 'react-redux';
import {
  updateSectionName,
  deleteSection,
} from '../../../../../redux/slices/cvDataSlice';
import styles from '../ActSection.module.css';
import { EditButton, DeleteButton } from '../../../../../components/Button';

const SectionName = ({ sectionKey, sectionName }) => {
  const dispatch = useDispatch();

  const handleSectionNameClick = () => {
    const newSectionName = prompt('Enter new section name:', sectionName);
    if (newSectionName !== null) {
      // Dispatch action to update section name in Redux store
      dispatch(
        updateSectionName({
          sectionKey: sectionKey,
          newSectionName: newSectionName,
        })
      );
    }
  };

  const handleDeleteSection = () => {
    dispatch(deleteSection(sectionKey));
  };
  return (
    <div className={styles.sectionNameGrop}>
      <div
        className={styles.sectionNameContainer}
        onClick={handleSectionNameClick}
      >
        <h1>{sectionName}</h1>
        <EditButton />
      </div>
      <DeleteButton onClick={handleDeleteSection} />
    </div>
  );
};

export default SectionName;
