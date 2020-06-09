import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';

import Fonts from '~/src/styles/fonts';
import BaseStyles from '~/src/styles/base';

import Button from '~/src/commons/button';
import Home from '~/src/views/home/home';

const App = () => (
  <ThemeProvider theme={() => ({})}>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <Button>el boton admin</Button>
        </Route>
        <Route path="/cart">
          <Button>el boton cart</Button>
        </Route>
      </Switch>
    </Router>
    <BaseStyles />
    <Fonts />
  </ThemeProvider>
);

export default hot(module)(App);
