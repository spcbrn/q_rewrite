import { combineReducers } from 'redux';
import ioReducers from './io/reduxReducers_IO';
import restReducers from './rest/reduxReducers_REST';

const { rooms } = ioReducers;
const { test, users } = restReducers;

export default combineReducers( { rooms, test, users } );
