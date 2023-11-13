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
import { LoadingOutlined} from '@ant-design/icons';

const Login = React.lazy(()=>import('../views/Login/Login'))
const Register = React.lazy(()=>import('../views/Register/Register'))
const ResetPassword = React.lazy(()=>import('../views/ResetPassword/ResetPassword'))

//进行懒加载
const JobPage1= React.lazy(()=>import('../views/Selector/GeneralQ/JobPage/JobPage1'))
const JobPage2= React.lazy(()=>import('../views/Selector/GeneralQ/JobPage/JobPage2'))
const JobPage3= React.lazy(()=>import('../views/Selector/GeneralQ/JobPage/JobPage3'))
const JobPage4= React.lazy(()=>import('../views/Selector/GeneralQ/JobPage/JobPage4'))
const JobPage5= React.lazy(()=>import('../views/Selector/GeneralQ/JobPage/JobPage5'))

const StdPage1= React.lazy(()=>import('../views/Selector/GeneralQ/StdPage/StdPage1'))
const StdPage2= React.lazy(()=>import('../views/Selector/GeneralQ/StdPage/StdPage2'))
const StdPage3= React.lazy(()=>import('../views/Selector/GeneralQ/StdPage/StdPage3'))
const StdPage4= React.lazy(()=>import('../views/Selector/GeneralQ/StdPage/StdPage4'))
const StdPage5= React.lazy(()=>import('../views/Selector/GeneralQ/StdPage/StdPage5'))


export default function MRouter() {

    const jobGeneralQChildrenRoutes = [
        {
          index: true,
          element: <Navigate to="page1" replace />
        },
        { path: 'page1', element: <JobPage1 /> },
        { path: 'page2', element: <JobPage2 /> },
        { path: 'page3', element: <JobPage3 /> },
        { path: 'page4', element: <JobPage4 /> },
        { path: 'page5', element: <JobPage5 /> }
        // ... other child routes
      ];
      const StdGeneralQChildrenRoutes = [
        {
          index: true,
          element: <Navigate to="page1" replace />
        },
        { path: 'page1', element: <StdPage1 /> },
        { path: 'page2', element: <StdPage2 /> },
        { path: 'page3', element: <StdPage3 /> },
        { path: 'page4', element: <StdPage4 /> },
        { path: 'page5', element: <StdPage5 /> }
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
                    element: <Navigate to="generalq" replace />
                },
                { 
                    path: "generalq",
                    element: <GeneralQ childRoutes={localStorage.getItem("topicId")==="1"? StdGeneralQChildrenRoutes:jobGeneralQChildrenRoutes} />,
                    children: localStorage.getItem("topicId")==="1"? StdGeneralQChildrenRoutes:jobGeneralQChildrenRoutes
                },
                { path: 'interview', element: <Interview /> },
                { path: 'resume', element: <Resume /> },
                { path: 'coverletter', element: <CoverLetter /> },
                { path: 'jobmatch', element: <JobMatch /> },
              ]
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
