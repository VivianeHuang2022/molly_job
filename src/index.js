import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import MRouter from './router/MRouter';
// import Login from './views/Login/Login';
import AlertProvider from './components/AlertProvider/AlertProvider'
import { Provider } from 'react-redux';
import store from './redux/store'; // 导入你的 store

// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <AlertProvider>
    <React.StrictMode>
      <HashRouter>
        <MRouter></MRouter>
      </HashRouter>
    </React.StrictMode>
   </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
