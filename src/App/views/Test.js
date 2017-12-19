import React from 'react';

import IOTest from './../components/IOTest';

const Test = () => {
  return (
    <div>
      <h1>Test Auth:</h1>
      <a href="http://localhost:8003/auth/devmtn">
        <button>Login</button>
      </a>
      <a href="http://localhost:8003/auth/devmtn/logout">
        <button>Logout</button>
      </a>
      <IOTest />
    </div>
  )
}

export default Test;
