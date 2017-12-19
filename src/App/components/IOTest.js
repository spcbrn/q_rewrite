import React from 'react';
import { connect } from 'react-redux';

import { default as ioCtrl } from './../../redux/io/ioActionsController';
import { default as restCtrl } from './../../redux/rest/restActionsController';

const { joinRoom, leaveRoom } = ioCtrl;
const { getSessionUser } = restCtrl;

const IOTest = (props) => {
  return (
    <div>
      <h1>Testing the socket connection...</h1>
      <button onClick={() => props.getSessionUser()}>Current User</button><br /><br />
      <button onClick={() => props.joinRoom(42)}>Join Room</button>
      <button onClick={() => props.leaveRoom(42)}>Leave Room</button>
    </div>
  )
};

export default connect(null, { getSessionUser, joinRoom, leaveRoom })(IOTest);
