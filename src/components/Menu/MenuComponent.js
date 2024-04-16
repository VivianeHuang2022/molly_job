import React from 'react';
import styles from './MenuStyles.module.css';
import { useLocation } from 'react-router-dom';

export const CustomMenuComponent = ({ handleItemClick, menuItems }) => {
  // 使用 useLocation 钩子获取当前路由信息
  const location = useLocation();

  // 根据当前路由判断是否包含菜单项的 key 来激活
  const isActive = (menuItem) => {
    // 确保 menuItem 对象包含 key 属性
    const menuItemKey = menuItem.key;
    // 检查当前路由是否包含菜单项的 key
    return location.pathname.includes(menuItemKey);
  };
  return (
    <div className={styles.menuContainer}>
      {menuItems.map((item) => (
        <div
          key={item.key}
          className={`${styles.menuItem} ${
            isActive(item) ? styles.active : ''
          }`}
          onClick={() => handleItemClick(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
