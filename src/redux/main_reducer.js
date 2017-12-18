import { combineReducers } from 'redux';
import ioReducers from './io/ioReducers';
import restReducers from './rest/restReducers';

const { rooms } = ioReducers;
const { test, users } = restReducers;

export default combineReducers( { rooms, test, users } );
