import logoImage from "../../assets/images/Logo.PNG";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import {Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import items from "./items";
import { useNavigate,useLocation } from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("");
    const [hoveredItem, setHoveredItem] = useState(null);

    const updateActiveItemBasedOnPath = (path) => {
      switch(path) {
          case '/layout/interview':
              setActiveItem("Interview");
              break;
          case '/layout/resume':
              setActiveItem("Resume");
              break;
          case '/layout/coverletter':
              setActiveItem("Cover Letter");
              break;
          case '/layout/jobmatch':
              setActiveItem("Match");
              break;
          default:
              setActiveItem("Interview");
      }
  }

    const handleToInterviewPage = () => {
        setActiveItem("Interview");
        localStorage.getItem("topicId")==="1"?navigate("/layout"):navigate('interview');
    };
    const handleToResumePage = () => {
        setActiveItem("Resume");
        navigate('resume')
    };

    const handleToCoverLetterPage = () => {
        setActiveItem("Cover Letter");
        navigate('coverletter')
    };
    const handleToMacthPage = () => {
        setActiveItem("Match");
        navigate('jobmatch')
    };
    const backToStart = () => {
      navigate('/start')
  };

    useEffect(() => {
      updateActiveItemBasedOnPath(location.pathname);
    }, [location]);

  return (
    <div>
    <div className={styles.navbar}>
      <img src={logoImage} className={styles.logo} alt="logo" onClick={backToStart}/>

      <div
        className={`${styles.menuItem} ${
          activeItem === "Interview" ? styles.active : ""
        }`}
        onClick={handleToInterviewPage}
      >
        {localStorage.getItem("topicId")==="1"?"Program Match":"Interview"}
      </div>
      <div
        className={`${styles.menuItem} ${
          activeItem === "Cover Letter" ? styles.active : ""
        }`}
        onClick={handleToCoverLetterPage}
      >
        Cover Letter
      </div>
      <div
        className={`${styles.menuItem} ${
          activeItem === "Resume" ? styles.active : ""
        }`}
        onClick={handleToResumePage}
      >
        Resume
      </div>
      <div
        className={`${styles.menuItem} ${
          activeItem === "Match" ? styles.active : ""
        }`}
        onClick={handleToMacthPage}
      >
        Match
      </div>

      <Dropdown
      //overlay
      overlay={
          <Menu>
            {/* 假设 items 是 Menu.Item 的数组 */}
            {items.map((item) => (
              <Menu.Item
              key={item.key}
              style={{
                backgroundColor: hoveredItem === item.key ? 'black' : 'white',
                fontSize: '20px',
                color: hoveredItem === item.key ? 'white' : 'black'
              }}
              onMouseEnter={() => setHoveredItem(item.key)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.label}
            </Menu.Item>
            ))}
          </Menu>
        }
        placement="bottomLeft"
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ backgroundColor: "black", cursor: "pointer" }}
        />
      </Dropdown>      
    </div>
    {props.children} 
    </div>
  );
}

export default Navbar;
