const sharedSession = require('express-socket.io-session')
    , ioReducer = require('./ioReducer');

module.exports = {
  applyMiddleware: (io, session) => {
    io.use(sharedSession(session, {
      autoSave: true
    }));
    io.use((socket, next) => {
      let { passport } = socket.handshake.session;
      socket.user = passport ? passport.user : 'null user';
      return next();
    })
  },
  addListeners: (io, db) => {
    io.on('connect', (socket) => {
      socket.on('disconnect', () => console.log(`user disconnected ${socket.id}`));
      socket.on('action', (action) => ioReducer(action, socket, io));
    })
  }
}
