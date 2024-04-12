import React, { useState } from 'react';
import { Collapse } from 'antd';
import { DeleteButton } from './Button';
import styles from './Comps.module.css';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../redux/slices/cvDataSlice';

const CollapsePanel = ({ sectionName, PanelContent, sectionKey, itemId }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteExperience = () => {
    dispatch(deleteExperience({ sectionKey, itemId }));
  };
  const items = [
    {
      key: '1',
      label: (
        <div className={styles.experienceName}>
          {sectionName}
          {showDelete && <DeleteButton onClick={handleDeleteExperience} />}
        </div>
      ),
      children: PanelContent,
    },
  ];

  const handleCollapseChange = (e) => {
    if (e.length) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  };
  return <Collapse items={items} onChange={handleCollapseChange} />;
};

export default CollapsePanel;
