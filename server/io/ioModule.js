const sharedSession = require('express-socket.io-session')
const ioReducer = require('./ioReducer');

module.exports = {
  ioSessionMiddleware: (io, session) => {
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
    console.log('io services initialized');

    io.on('connect', (socket) => {
      socket.on('disconnect', () => console.log(`${socket.user} disconnected ${socket.id}`));
      socket.on('action', (action) => ioReducer(action, socket, io));
    })
  }
};
