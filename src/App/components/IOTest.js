import React from 'react';
import { connect } from 'react-redux';

import ioController from './../../redux/io/ioController';
import ducksController from './../../redux/ducks/ducksController';

const { joinRoom, leaveRoom } = ioController;
const { testToggle, getUser } = ducksController;

const IOTest = (props) => {
  console.log(ducksController);
  props.testToggle();
  return (
    <div>
      <h1>Testing the socket connection...</h1>
      <button onClick={() => props.joinRoom(42)}>Join Room</button><br />
      <button onClick={() => props.getUser()}>Current User</button>
      <button onClick={() => props.leaveRoom(42)}>Leave Room</button>
    </div>
  )
}

export default connect(null, { testToggle, getUser, joinRoom, leaveRoom })(IOTest);
