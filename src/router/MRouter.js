import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'

export default function MRouter() {
    const element = useRoutes([
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
])
  return element
}
