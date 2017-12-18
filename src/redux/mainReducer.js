import { combineReducers } from 'redux';
import ioReducers from './io/ioReducers';
import ducksReducers from './ducks/ducksReducers';

const { rooms } = ioReducers;
const { test, users } = ducksReducers;

export default combineReducers( { rooms, test, users } );
