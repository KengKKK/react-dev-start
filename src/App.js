import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  home,
  manage,
  table,
  common
}  from './pages/index'

import MyHeader from './pages/layout/header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
        <MyHeader/>

          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/common" component={common} />
            
            <Route exact path="/manage" component={manage} />
            <Route exact path="/table" component={table} />

          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
