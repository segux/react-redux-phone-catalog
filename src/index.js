import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// components
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './App.routes';

// Store
import store from './App.store';


import './index.css';

const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
