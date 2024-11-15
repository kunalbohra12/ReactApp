import React  from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './Users';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './Compnents/HeaderUI/HeaderUI';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <GoogleOAuthProvider clientId='30441500610-d3skdv2n0cgqov7d2jcs08ika44ous22.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
