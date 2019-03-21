import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Home,
  Redux,
  User,
  Value
} from './pages/index'

import MyHeader from './pages/layout/header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <MyHeader />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/get.Redux" component={Redux} />
            <Route exact path="/user" component={User} />
            <Route exact path="/value" component={Value} />

          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
