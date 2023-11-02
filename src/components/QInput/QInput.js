import React from 'react'
import style from './QInput.module.css'

export default function QInput(props) {
  const { title, type, placeholder, size, value, onChange } = props;
  return (
    <div className={style.container}>
        <div className={style.title}>{title}</div>
        {type?(
        <textarea 
          className={style.TextInput} 
          style={size&&{height:size}} 
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        ):(
        <input 
          className={style.input} 
          placeholder={placeholder} 
          type='text'
          value={value}
          onChange={onChange}/>)}
    </div>
  )
}
