import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-content">
          <h1 className="not-found-title">404 - Page Not Found</h1>
          <p className="not-found-message">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <hr />
          <p className="product-info">
            Molly Apply is here to help you better apply to overseas schools and jobs. We are working on integrating features like university matching and mock interviews. Stay tuned for updates!
          </p>
          <hr />
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
    </div>
  );
};

export default NotFound;
