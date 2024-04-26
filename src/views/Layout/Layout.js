import React ,{useEffect}from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import CoverLetter from '../Selector/CoverLetter/';
import Recommendation from '../Selector/Recommendation';
import { useNavigate, useLocation } from 'react-router-dom';

export const Layout = () => {
  return (
    <Navbar>
      <Outlet />
    </Navbar>
  );
};

export const CoverletterLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 检查路由是否包含 'edit' 路径片段
    if (location.pathname.includes('/edit')) {
      // 导航到 '/generalq'，注意这是相对于根路径的绝对路径
      navigate('/Layout/generalq', { replace: true });
    }
  }, [navigate, location]);
  return (
    <CoverLetter>
      <Outlet />
    </CoverLetter>
  );
};

export const RecommendationLayout = () => {
  return (
    <Recommendation>
      <Outlet />
    </Recommendation>
  );
};
