import React, { useState, useRef,useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import styles from "./SelectBox.module.css"; // 引入CSS样式

export default function SelectBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const selectOptionsRef = useRef(null); // 添加对选项部分的引用
    const selectBoxRef = useRef(null);
    const {options} = props;

    const handleOptionClick = (value) => {
        // console.log(value)
        setSelectedOption(value);
        setIsOpen(false); // 关闭下拉菜单
      };
      const toggleDropdown = () => {
        // console.log(isOpen)
        setIsOpen(!isOpen);
      };

        // 点击外部时关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target) &&
      selectOptionsRef.current && !selectOptionsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // 监听点击事件
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 清理事件监听
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div >
        <div className={styles.selectBoxContainer} ref={selectBoxRef}>
            <input className={styles.selectBoxInput} value={selectedOption} placeholder={options[0]} readOnly />
            <button className={styles.selectBoxButton} onClick={toggleDropdown}>
                <DownOutlined />
            </button>
        </div>
        {isOpen && (
            <div className={styles.selectBoxOptions} ref={selectOptionsRef}>
            {options.map((option, index) => (
                <div key={index} onClick={()=>handleOptionClick(option)} className={styles.selectBoxOption}>
                {option}
                </div>
            ))}
            </div>
        )}
    </div>
  );
}
