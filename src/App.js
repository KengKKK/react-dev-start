import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Home,
  Admin,
  User,
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

            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" component={User} />

          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
