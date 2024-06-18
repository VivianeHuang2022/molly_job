import React, { useEffect } from 'react';
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
    } else {
      navigate('/layout/coverletter/generate');
    }
  }, [navigate, location.pathname]); //20240523 lily第二项数组内容不能删除，否则在组件非首次渲染时,进行导航menu切换的时候会跳到edit那个测试页面
  return (
    <CoverLetter>
      <Outlet />
    </CoverLetter>
  );
};

export const RecommendationLayout = () => {
  // 20240523 lily 删除了推荐信前置判断逻辑,加上会导致首次进入推荐信就进模板页.推荐信就算要调整也不是在这里,coverletter是20240246没能在router解决跳转才在layout处理的

  return (
    <Recommendation>
      <Outlet />
    </Recommendation>
  );
};
