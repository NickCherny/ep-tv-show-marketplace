import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import store from './modules/index';
import PageRouter from "./PageRouter";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <li>
            <Link to="/episode">Episode</Link>
          </li>
          <li>
            <Link to="/shows-list">Shows</Link>
          </li>
        </nav>

        <PageRouter/>
      </Router>
    </Provider>
  );
}

export default App;
