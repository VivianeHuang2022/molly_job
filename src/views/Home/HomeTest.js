import { Button } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomeTest() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <h1>Homepage</h1>
      <div>{'token: ' + token}</div>
      <div style={{ padding: '10px' }}>
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem('token');
          }}
        >
          {' '}
          ClearToken
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem('token');
            navigate(
              `/login?returnUrl=${encodeURIComponent(location.pathname)}`
            );
          }}
        >
          {' '}
          Logout
        </Button>
      </div>
    </div>
  );
}
