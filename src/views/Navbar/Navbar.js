import logoImage from '../../assets/images/Logo.PNG';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

import { CustomMenuComponent } from '../../components/Menu/MenuComponent';
import { useNavigate } from 'react-router-dom';

import { menuItems, profileItems } from './MenuData';
import Profile from './Profile';
// import { useLocation } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('coverletter');

  // const location = useLocation();

  const handleItemClick = (key) => {
    navigate(key);
    setActiveKey(key);
  };

  const backToStart = () => {
    navigate('/start')
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

        <Profile items={profileItems} />
      </div>

      {props.children}
    </div>
  );
}

export default Navbar;
