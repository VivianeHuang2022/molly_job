// 假设你的按钮位于页面的某个组件内部
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../../../redux/cvDataSlice'; // 导入切换语言的 Redux action


const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.cvData.language);

  const handleLanguageSwitch = () => {
    // 切换语言
    const newLanguage = currentLanguage === 'EN' ? 'CN' : 'EN';
    dispatch(changeLanguage(newLanguage)); // 发送切换语言的 Redux action
  };

  return (
    <button onClick={handleLanguageSwitch}>
      {currentLanguage === 'EN' ? '切换到中文' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;
