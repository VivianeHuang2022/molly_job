import React from 'react'
import style from './QInput.module.css'

export default function QInput(props) {
  return (
    <div className={style.container}>
        <div className={style.title}>{props.title}</div>
        {props.type?<textarea className={style.TextInput} placeholder={props.placeholder}></textarea>:<input className={style.input} placeholder={props.placeholder}/>}
    </div>
  )
}
