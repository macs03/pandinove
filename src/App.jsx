import { hot } from 'react-hot-loader';
import React from 'react';
import './index.css';

import Algo from '~/src/ss/algo';

const message = 'Welcome to test';

const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <h2>{Algo.name}</h2>
  </div>
);

export default hot(module)(App);
