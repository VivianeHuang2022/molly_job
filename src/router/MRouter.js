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
import Q1 from '../views/Selector/GeneralQ/Q1'
import Q2 from '../views/Selector/GeneralQ/Q2'
import Q3 from '../views/Selector/GeneralQ/Q3'
import { LoadingOutlined} from '@ant-design/icons';

const Login = React.lazy(()=>import('../views/Login/Login'))
const Register = React.lazy(()=>import('../views/Register/Register'))
const ResetPassword = React.lazy(()=>import('../views/ResetPassword/ResetPassword'))


export default function MRouter() {

    const generalQChildrenRoutes = [
        {
          index: true,
          element: <Navigate to="q1" replace />
        },
        { path: 'q1', element: <Q1 /> },
        { path: 'q2', element: <Q2 /> },
        { path: 'q3', element: <Q3 /> },
        // ... other child routes
      ];
      

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
            path: "/generalq",
            element: <GeneralQ childRoutes={generalQChildrenRoutes} />,
            children: generalQChildrenRoutes
        }
        ,
        {
            path:"*",
            element:<NotFound/>
        }
])
  return <Suspense fallback={<LoadingOutlined />}>
            {routes}
        </Suspense>
  
}
