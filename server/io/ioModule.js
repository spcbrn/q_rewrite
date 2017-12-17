const sharedSession = require('express-socket.io-session')
const ioReducer = require('./ioReducer');

module.exports = {
  //shares the passport user with the socket instance, adding it to socket.user
  ioSessionMiddleware: (io, session) => {
    io.use(sharedSession(session, {
      autoSave: true
    }));
    io.use((socket, next) => {
      let { passport } = socket.handshake.session;
      socket.user = passport
                    ? passport.user
                    ? passport.user
                    : {id: null}
                    : {id: null};
      return next();
    })
  },
  //adds all of the socket event listeners and dispatchers to the app
  addListeners: (io) => {
    console.log('3/5 - socket services initialized')

    io.on('connect', (socket) => {
      console.log(`user ${socket.user.id} connected on ${socket.id}`)
      socket.on('disconnect', () => console.log(`user ${socket.user.id} disconnected from ${socket.id}`));
      socket.on('action', (action) => ioReducer(action, socket, io));
    })
  }
};
