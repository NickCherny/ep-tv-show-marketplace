import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './bootstrap';
import store from './store/index';
import PageRouter from "./PageRouter";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageRouter/>
      </Router>
    </Provider>
  );
}

export default App;
