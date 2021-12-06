import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./routes.js";
import './App.css';
import { Router } from 'react-router';
const createHashHistory = require("history/lib/createHashHistory");

const history = createHashHistory({queryKey: false});



ReactDOM.render(
  <Router history={history}>
  {routes}
</Router>
  , document.getElementById('root'));

