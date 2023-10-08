import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import MRouter from './router/MRouter';
// import Login from './views/Login/Login';
import AlertProvider from './components/AlertProvider/AlertProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AlertProvider>
  <React.StrictMode>
    <HashRouter>
      <MRouter></MRouter>
    </HashRouter>
  </React.StrictMode>
   </AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
