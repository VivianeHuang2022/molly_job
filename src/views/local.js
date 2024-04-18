// localization.js
import labels_EN from './texts';
import labels_CN from './texts_CN';

export const getLabels = (language) => {
  return language === 'CN' ? labels_CN : labels_EN;
};
