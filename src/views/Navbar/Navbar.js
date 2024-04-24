import logoImage from '../../assets/images/Logo.PNG';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

import { CustomMenuComponent } from '../../components/Menu/MenuComponent';
import { useNavigate } from 'react-router-dom';

import { getMenuItems, profileItems } from './MenuData';
import Profile from './Profile';
import { editState, hasLocalData } from '../../utils/checkCache';

import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { getLabels } from '../local';

function Navbar(props) {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('coverletter');

  //用全局状态管理传入语言
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const menuItems = getMenuItems(texts);


  const handleItemClick = (key) => {

    if(key === 'coverletter'){
      if(!hasLocalData('isEditcoverletter')){
        editState('isEditcoverletter', false);
      }
      navigate('/layout/coverletter/edit');
    }else{
      navigate(key);
    }
    setActiveKey(key);    
  };

  const backToStart = () => {
    navigate('/')
};

  return (
    <div>
      <div className={styles.navbarContainer}>
        <img src={logoImage} className={styles.logo} alt="logo"  onClick={backToStart}/>

        <CustomMenuComponent
          activeItem={activeKey}
          handleItemClick={handleItemClick}
          menuItems={menuItems}
        />

        <Profile profileItems={profileItems} />
      </div>

      {props.children}
    </div>
  );
}

export default Navbar;
