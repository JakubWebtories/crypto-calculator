import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import Main from './pages/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode> 

 /* <React.StrictMode>
      <Main />
  </React.StrictMode> */

);


