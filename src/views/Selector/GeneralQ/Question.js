import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Question(props) {
    const navigate = useNavigate()
    const handleToNext=()=>{
        navigate("questionp2")
    }
    const handlToLast=()=>{
        navigate("questionp1")
    }
  return (
    <div>
    {props.children}
  <button onClick={handlToLast}>Last</button>
  <button onClick={handleToNext}>Next</button>
  </div>
  )
}
