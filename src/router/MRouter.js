import React,{Suspense} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import Unauthorized from '../components/Unauthorized'
import NotFound from '../components/NotFound'
const Login = React.lazy(()=>import('../views/Login/Login'))
const Register = React.lazy(()=>import('../views/Register/Register'))
const ResetPassword = React.lazy(()=>import('../views/ResetPassword/ResetPassword'))


export default function MRouter() {
    const routes  = useRoutes([
        {
            path:"/",
            element:<Navigate to="/login"/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
        ,
        {
            path:"/resetpassword",
            element:<ResetPassword/>
        }
        ,
        {
            path:"/home",
            element:localStorage.getItem("token")?<Home/>:<Unauthorized/>
        }
        ,
        {
            path:"*",
            element:<NotFound/>
        }
])
  return <Suspense fallback={<div>Loading...</div>}>
            {routes}
        </Suspense>
  
}
