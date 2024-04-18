import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import CoverLetter from '../Selector/CoverLetter/';
import Recommendation from '../Selector/Recommendation';

export const Layout = () => {
  return (
    <Navbar>
      <Outlet />
    </Navbar>
  );
};

export const CoverletterLayout = () => {
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
