import React from 'react';
import { connect } from 'react-redux';

import ioController from './../../redux/io/ioController';
import { testToggle } from './../../redux/ducks/testReducer';

const { joinRoom } = ioController;

const IOTest = (props) => {
  props.joinRoom(42);
  props.testToggle();
  return (
    <div>
      <h1>Testing the socket connection...</h1>
    </div>
  )
}

export default connect(null, { joinRoom, testToggle })(IOTest);
