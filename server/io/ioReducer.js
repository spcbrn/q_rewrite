const combineReducers = require('redux').combineReducers
    , roomReducer = require('./reducers/roomReducer');

module.exports = (action, socket, io) => {
  const rooms = roomReducer(action, socket, io);

  return combineReducers( { rooms } );
};
