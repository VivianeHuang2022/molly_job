import logoImage from "../../assets/images/Logo.PNG";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import {Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import items from "./items";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("");
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleToInterviewPage = () => {
        setActiveItem("Interview");
        navigate('interview')
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

    useEffect(()=>{
      setActiveItem("Interview")
    },[])

  return (
    <div>
    <div className={styles.navbar}>
      <img src={logoImage} className={styles.logo} alt="logo" />

      <div
        className={`${styles.menuItem} ${
          activeItem === "Interview" ? styles.active : ""
        }`}
        onClick={handleToInterviewPage}
      >
        Interview
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
          activeItem === "Cover Letter" ? styles.active : ""
        }`}
        onClick={handleToCoverLetterPage}
      >
        Cover Letter
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
