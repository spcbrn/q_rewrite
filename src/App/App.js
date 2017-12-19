import React, { Component } from 'react';

import MainNav from './components/MainNav';
import router from './router/router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        {router}
      </div>
    );
  }
}

export default App;
