import { Button } from 'antd'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
  return (
    <div>
        <h1>Homepage</h1>
        <div>
            {"token: "+token}
        </div>
        <div style={{padding:"10px"}}>
            <Button type="primary" onClick={()=>{
                localStorage.removeItem("token")
            }}> ClearToken</Button>
        </div>
        <div style={{padding:"10px"}}>
            <Button type="primary" onClick={()=>{
                localStorage.removeItem("token")
                navigate('/login')
            }}> Logout</Button>
        </div>
        
    </div>
  )
}
