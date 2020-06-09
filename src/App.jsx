import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Button from '~/src/commons/button';
import Home from '~/src/components/home/home';

const App = () => (
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
);

export default hot(module)(App);
