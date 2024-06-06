import React, { useState } from 'react';
import style from './QInput.module.css';
import { getLabels } from '../../views/local'; // 导入语言配置文件加载函数
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { useSelector } from 'react-redux';

export default function QInput({
  title,
  type,
  placeholder,
  size,
  value,
  onChange,
  marB,
  name,
  isRequired,
  inputValueType
}) {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const [tip, setTip] = useState(false);
  const handleInputValue = (value) => {
    console.log(value);
    if (isRequired && !value) {
      setTip(true);
    } else setTip(false);
  };

  return (
    <div className={style.container} style={marB && { marginBottom: marB }}>
      <div className={style.title}>
        {title}
        {isRequired ? '*' : undefined}
      </div>
      {type ? (
        <textarea
          className={style.TextInput}
          style={size && { height: size }}
          placeholder={placeholder}
          value={value}
          onBlur={(e) => handleInputValue(e.target.value)}
          onChange={onChange}
          required
        />
      ) : (
        <input
          name={name}
          className={style.input}
          placeholder={placeholder}
          type="text"
          value={value}
          onBlur={(e) => handleInputValue(e.target.value)}
          onChange={onChange}
          required
        />
      )}
      <div className={style.tip}> {tip ? texts.tips.fillInSingle : undefined}</div>
    </div>
  );
}
