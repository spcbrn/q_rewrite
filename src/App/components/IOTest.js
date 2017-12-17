import React from 'react';
import { connect } from 'react-redux';

import ioController from './../../redux/io/ioController';
import { testToggle } from './../../redux/ducks/testReducer';

const { joinRoom, leaveRoom } = ioController;

const IOTest = (props) => {
  props.testToggle();
  return (
    <div>
      <h1>Testing the socket connection...</h1>
      <button onClick={() => props.joinRoom(42)}>Join Room</button>
      <button onClick={() => props.leaveRoom(42)}>Leave Room</button>
    </div>
  )
}

export default connect(null, { joinRoom, leaveRoom, testToggle })(IOTest);
