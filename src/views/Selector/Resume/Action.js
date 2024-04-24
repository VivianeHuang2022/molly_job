import { Dropdown } from 'antd';
import ActSection from './ActSection';
import { AddMore } from '../../../components/Button';
import { useDispatch } from 'react-redux';
import { addNewSection } from '../../../redux/slices/cvDataSlice';

const ActionContainer = ({
  labels,
  singleCvData,
  currentSectionType,
  allSectionType,

  styles,
}) => {
  const sectionList = allSectionType.filter(
    (section) => !currentSectionType.some((item) => section === item)
  );

  const dispatch = useDispatch();

  const capitalizeFirstLetterOfEachWord = (str) => {
    let formattedStr = str
      .replace(/[_]/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase();
    return formattedStr.replace(/\b\w/g, (match) => {
      return match.toUpperCase();
    });
  };

  const items = sectionList.map((key) => {
    return { label: `+ ${capitalizeFirstLetterOfEachWord(key)}`, key: key };
  });

  const handleDropdownChange = (e) => {
    const newSection = e.key;
    // 这里 value 就是用户选择的 sectionType
    //console.log('Selected section:', newSection);
    dispatch(addNewSection(newSection));
  };

  const menuProps = {
    items,
    onClick: handleDropdownChange,
  };

  return (
    <div className={styles.actionOutContainer}>
      <div className={styles.actionContainer}>
        <div className={styles.actionContent}>
          <ActSection
            labels={labels}
            singleCvData={singleCvData}
            currentSectionType={currentSectionType}
          />
        </div>

        <Dropdown menu={menuProps} placement="bottomLeft">
          <div>{sectionList.length !== 0 && <AddMore label="Sections" />}</div>
        </Dropdown>
      </div>
    </div>
  );
};

export default ActionContainer;
