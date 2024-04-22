import React from 'react';
import './Unauthorized.css';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="unauthorized-card">
      <div className="unauthorized-content">
        <h1 className="unauthorized-title">401 - Unauthorized</h1>
        <p className="unauthorized-message">
          No token provided or invalid token.
        </p>
        <p className="contact-info">
          For assistance, please contact us at:
          <br />
          Email: <a href="mailto:viviane.huang@stu-de.org">viviane.huang@stu-de.org</a>
          <br />
          WeChat: Viviane_2022
        </p>
        <Link to="/" className="not-found-link">
                Go to Home Page
              </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
