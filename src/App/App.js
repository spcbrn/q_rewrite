import React, { Component } from 'react';

import IOTest from './components/IOTest';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Does it tho?</h1>
        <a href="http://localhost:8003/auth/devmtn">
          <button>Login</button>
        </a>
        <a href="http://localhost:8003/auth/devmtn/logout">
          <button>Logout</button>
        </a>
        <IOTest />
      </div>
    );
  }
}

export default App;
