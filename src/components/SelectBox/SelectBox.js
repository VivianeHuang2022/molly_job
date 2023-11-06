import React, { useState, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
import styles from "./SelectBox.module.css"; // 引入CSS样式

export default function SelectBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const selectBoxRef = useRef(null);
    const {options} = props;

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setIsOpen(false); // 关闭下拉菜单
      };
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div >
        <div className={styles.selectBoxContainer} ref={selectBoxRef}>
            <input className={styles.selectBoxInput} value={selectedOption} placeholder={options[0]} readOnly />
            <button className={styles.selectBoxButton} onClick={toggleDropdown}>
                <DownOutlined />
            </button>
        </div>
        {isOpen && (
            <div className={styles.selectBoxOptions}>
            {options.map((option, index) => (
                <div onClick={() => handleOptionClick(option)} className={styles.selectBoxOption}>
                {option}
                </div>
            ))}
            </div>
        )}
    </div>
  );
}
