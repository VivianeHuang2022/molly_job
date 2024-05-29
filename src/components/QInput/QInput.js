import React, { useState } from 'react';
import style from './QInput.module.css';

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
  const [tip, setTip] = useState(false);
  const handleInputValue = (value) => {
    console.log(value);
    if (isRequired && !value) {
      setTip(true);
    }
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
      <div className={style.tip}> {tip ? `${inputValueType} is required` : undefined}</div>
    </div>
  );
}
