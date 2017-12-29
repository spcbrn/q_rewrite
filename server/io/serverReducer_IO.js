const combineReducers = require('redux').combineReducers
    , roomReducer = require('./reducers/roomReducer_IO');

module.exports = (action, socket, io) => {
  const rooms = roomReducer(action, socket, io);

  return combineReducers( { rooms } );
};
