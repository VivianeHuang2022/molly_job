import React,{Suspense} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Unauthorized from '../components/Unauthorized'
import NotFound from '../components/NotFound'
import Start from '../views/Start/Start'
import HomeTest from '../views/Home/HomeTest'
import Home from '../views/Home/Home'
const Login = React.lazy(()=>import('../views/Login/Login'))
const Register = React.lazy(()=>import('../views/Register/Register'))
const ResetPassword = React.lazy(()=>import('../views/ResetPassword/ResetPassword'))


export default function MRouter() {
    const routes  = useRoutes([
        {
            path:"/",
            element:<Navigate to="/start"/>
        },
        {
            path:"/start",
            element:<Start/>
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
            path:"/home/:Id",
            element:<Home/>
        }
        ,
        {
            path:"/hometest",
            element:localStorage.getItem("token")?<HomeTest/>:<Unauthorized/>
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
