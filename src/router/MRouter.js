import React,{Suspense} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Unauthorized from '../components/Unauthorized'
import NotFound from '../components/NotFound'
import Start from '../views/Start/Start'
import HomeTest from '../views/Home/HomeTest'
import Home from '../views/Home/Home'
import Layout from '../views/Layout/Layout'
import Interview from '../views/Selector/Interview/JobInterview'
import CoverLetter from '../views/Selector/CoverLetter/CoverLetter'
import Resume from '../views/Selector/Resume/Resume'
import JobMatch from '../views/Selector/Match/JobMatch'
import GeneralQ from '../views/Selector/GeneralQ/GeneralQ'
import QuestionP1 from '../views/Selector/GeneralQ/QuestionP1'
import QuestionP2 from '../views/Selector/GeneralQ/QuestionP2'
import QuestionP3 from '../views/Selector/GeneralQ/QuestionP3'

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
        },
        {
            path:"/layout",
            element:<Layout/>,
            children:[
                { 
                    index: true, 
                    element: <Navigate to="interview" replace />
                },
                { path: 'interview', element: <Interview /> },
                { path: 'resume', element: <Resume /> },
                { path: 'coverletter', element: <CoverLetter /> },
                { path: 'jobmatch', element: <JobMatch /> },
              ]
        }
        ,
        {
            path:"/generalq",
            element:<GeneralQ/>,
            children:[
                { 
                    index: true, 
                    element: <Navigate to="questionp1" replace />
                },
                { path: 'questionp1', element: <QuestionP1 /> },
                { path: 'questionp2', element: <QuestionP2 /> },
                { path: 'questionp3', element: <QuestionP3 /> },
              ]
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
