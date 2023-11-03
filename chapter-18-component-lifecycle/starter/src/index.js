import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import Practice3 from "./Practice3";
import Practice4 from "./Practice4";
import Practice5 from "./Practice5";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
