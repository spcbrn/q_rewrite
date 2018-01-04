import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNav from './components/MainNav';
import router from './router/router';

import './App.css';

class App extends Component {

  render() {
    const AppMain = (props, router) => {
      return (
        <main>
          <MainNav />
          {router}
        </main>
      )
    };




    return (
      <div className="App">
        <Switch>
          {/*
            The purpose of this Switch is to validate the requested route/path.  If a user tries to navigate to an invalid path
            (a path we don't have a route for), they will be redirected to the root path before the app is rendered.

            When adding a new view or route to the application, do so in router, and add an instance of it here rendering AppMain as seen below.

            If the route your adding uses required params, add them here, use exact, and add them to the route in router.
            If the route you're adding uses optional params, don't add them here and don't use exact, but add them in router.
          */}
          <Route exact path="/" render={ props => AppMain(props, router) } />
          <Route exact path="/test" render={ props => AppMain(props, router) } />
          <Route exact path="/studentq" render={ props => AppMain(props, router) } />
          <Route exact path="/admin/dashboard" render={ props => AppMain(props, router) } />
          <Route exact path="/admin/q_preferences" render={ props => AppMain(props, router) } />
          <Route path="*" render={ props => <div>{props.history.push('/')}</div> } />
        </Switch>
      </div>
    )
  }
};

export default App;
