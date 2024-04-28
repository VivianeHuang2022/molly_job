import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Unauthorized from "../components/Unauthorized";
import NotFound from "../components/NotFound";
import Start from "../views/Start/Start";
import HomeTest from "../views/Home/HomeTest";
import Home from "../views/Home/Home";
import About from '../views/About';


import {
  Layout,
  CoverletterLayout,
  RecommendationLayout,
} from '../views/Layout/Layout';

import Interview from "../views/Selector/Interview/JobInterview";
import Resume from "../views/Selector/Resume";
import GeneralQ from "../views/Selector/GeneralQ/GeneralQ";
import { LoadingOutlined } from "@ant-design/icons";

import DownloadPage from '../views/Download/DownloadPage';
import PlanCardsContainer from '../views/payment/PaymentPage';
import QRCodePage from '../views/payment/QRCode';
import PayFinishedPage from '../views/payment/Finished';
import GenerateCountHistory from '../views/payment/History';
import GenerateCoverletter from '../views/Selector/CoverLetter/GenerateCoverLetterPage';
import GenerateRecommendation from '../views/Selector/Recommendation/GenerateRecommendation';
import QuestionMock from '../views/Selector/CoverLetter/Edit';
import EditRecommendationForm from '../views/Selector/Recommendation/Edit';
// import { hasLocalData } from '../utils/checkCache';

const Login = React.lazy(() => import("../views/Login/Login"));
const Register = React.lazy(() => import("../views/Register/Register"));
const ResetPassword = React.lazy(() =>
  import("../views/ResetPassword/ResetPassword")
);

//进行懒加载
const JobPage1 = React.lazy(() =>
  import("../views/Selector/GeneralQ/JobPage/JobPage1")
);
const JobPage2 = React.lazy(() =>
  import("../views/Selector/GeneralQ/JobPage/JobPage2")
);
const JobPage3 = React.lazy(() =>
  import("../views/Selector/GeneralQ/JobPage/JobPage3")
);
const JobPage4 = React.lazy(() =>
  import("../views/Selector/GeneralQ/JobPage/JobPage4")
);
const JobPage5 = React.lazy(() =>
  import("../views/Selector/GeneralQ/JobPage/JobPage5")
);

const StdPage1 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage1")
);
const StdPage2 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage2")
);
const StdPage3 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage3")
);
const StdPage4 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage4")
);

const StdPage5 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage5")
);

/*
const StdPage10 = React.lazy(() =>
  import("../views/Selector/GeneralQ/StdPage/StdPage10")
);
*/

export default function MRouter() {
  const jobGeneralQChildrenRoutes = [
    {
      index: true,
      element: <Navigate to="page1" replace />,
    },
    { path: "page1", element: <JobPage1 /> },
    { path: "page2", element: <JobPage2 /> },
    { path: "page3", element: <JobPage3 /> },
    { path: "page4", element: <JobPage4 /> },
    { path: "page5", element: <JobPage5 /> },
    // ... other child routes
  ];
  const StdGeneralQChildrenRoutes = [
    {
      index: true,
      element: <Navigate to="page1" replace />,
    },
    { path: "page1", element: <StdPage1 /> },
    { path: "page2", element: <StdPage2 /> },
    { path: "page3", element: <StdPage3 /> },
    { path: "page4", element: <StdPage4 /> },

    { path: "page5", element: <StdPage5 /> },
    // { path: 'page10', element: <StdPage10 /> }
    // ... other child routes
  ];

  const routes = useRoutes([
    {
      path: "/",
      //MVP版本只上线std部分,所以首页为std选择页面
      element: <Navigate to="/home/1" />,
      // element: <Navigate to="/start" />,
    },
    {
      path: "/start",
      element: <Start />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/resetpassword",
      element: <ResetPassword />,
    },
    {
      path: "/home/:Id",
      element: <Home />,
    },
    
    {
      path: "/hometest",
      element: localStorage.getItem("token") ? <HomeTest /> : <Unauthorized />,
    },

   
    {
      path: "/layout",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="generalq" replace />,
        },
        {
          path: "generalq",
          element: (
            <GeneralQ
              childRoutes={
                localStorage.getItem("topicId") === "1"
                  ? StdGeneralQChildrenRoutes
                  : jobGeneralQChildrenRoutes
              }
            />
          ),
          children:
            localStorage.getItem("topicId") === "1"
              ? StdGeneralQChildrenRoutes
              : jobGeneralQChildrenRoutes,
        },
        { path: "interview", element: <Interview /> },
        { path: "resume", element: <Resume /> },
        {
          path: 'coverletter',
          element: <CoverletterLayout />,
          //都是默认跳到edit
          children: [
            {
              index: true,
              element: <Navigate to="edit" replace />,
            },
            {
              path: 'edit',
              element: <QuestionMock/>,//20240426 这个实际上不会生效,在CoverletterLayout中为所有coverletter path下带有edit的路径导向了/Layout/generalq(这样处理是因为我不知道如何把原来的generalq编辑内容平移过来)
            },
            {
              path: 'generate',
              element: <GenerateCoverletter />,
            },
          ],
        },
        {
          path: 'recommendation',
          element: <RecommendationLayout />,
          children: [
            {
              index: true,
              element: <EditRecommendationForm />,
            },
            {
              path: 'edit',
              element: <EditRecommendationForm />,
            },
            {
              path: 'generate',
              element: <GenerateRecommendation />,
            },
          ],
        },
        {
          path: 'payment',
          element: <PlanCardsContainer />,
        },
      ],
    },
    {
      path: "/download",
      element: <DownloadPage />,
    },
    {
      path: "/payment",
      element: <PlanCardsContainer />,
    },
    {
      path: "/payment/qr",
      element: <QRCodePage />,
    },
    {
      path: "/payment/complete",
      element: <PayFinishedPage />,
    },
    {
      path: "/generateCounts_history", element:<GenerateCountHistory />
  },
  {
    path: '/about',
    element: <About />,
  },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <Suspense fallback={<LoadingOutlined />}>{routes}</Suspense>;
}

