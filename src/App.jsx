import { hot } from 'react-hot-loader';
import React from 'react';
import './index.css';

const message = 'Welcome to test';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
  </div>
);

export default hot(module)(App);
