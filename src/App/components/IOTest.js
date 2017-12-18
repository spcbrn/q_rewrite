import React from 'react';
import { connect } from 'react-redux';

import { default as ioCtrl } from './../../redux/io/ioActionsController';
import { default as restCtrl } from './../../redux/rest/restActionsController';

const { joinRoom, leaveRoom } = ioCtrl;
const { testToggle, getUser } = restCtrl;

const IOTest = (props) => {
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
