// localization.js
import labels_EN from './texts';
import labels_CN from './texts_CN';

export const getInitialLanguage = () => {
  // 从本地存储中获取语言设置
  const storedLanguage = localStorage.getItem('Lan');

  // 如果本地存储中存在语言设置，则返回本地存储中的语言设置
  // 否则根据浏览器语言设置返回初始语言
  // 如果浏览器语言是中文，返回 'CN'，否则返回 'EN'

  return storedLanguage || (navigator.language.startsWith('zh') ? 'CN' : 'EN');
};

export const getLabels = () => {
  const language = getInitialLanguage();
  return language === 'CN' ? labels_CN : labels_EN;
};
