import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export default function Question(props) {
  const childrenCount = props.Count;
    console.log(childrenCount)
    const navigate = useNavigate()
    const location = useLocation();
    const handleToNext=()=>{

      const currentQNumber = parseInt(location.pathname.split('/q')[1], 10);
      if (currentQNumber < childrenCount) {
          const nextQ = "q" + (currentQNumber + 1);
          navigate(`/generalq/${nextQ}`);
      }
      if(currentQNumber===childrenCount){
        navigate("/layout");
      }
    }
    const handlToLast=()=>{
      const currentQNumber = parseInt(location.pathname.split('/q')[1], 10);
      if (currentQNumber > 1) {
          const lastQ = "q" + (currentQNumber - 1);
          navigate(`/generalq/${lastQ}`);
      }
    }
  return (
    <div>
    {props.children}
  <button onClick={handlToLast}>Last</button>
  <button onClick={handleToNext}>Next</button>
  </div>
  )
}
