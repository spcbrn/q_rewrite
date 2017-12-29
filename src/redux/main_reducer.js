import { combineReducers } from 'redux';
import ioReducer from './io/reduxReducer_IO';
import restReducer from './rest/reduxReducer_REST';

const { rooms } = ioReducer;
const { test, users } = restReducer;

export default combineReducers( { rooms, test, users } );
