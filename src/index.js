import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./lib/css/animate.css";
import "./lib/css/animsition.min.css";
import "./lib/css/font-awesome.min.css";
import "./lib/css/style.css";

import App from "./App.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
       <App />
 </React.StrictMode>,
  document.getElementById('root')
);
