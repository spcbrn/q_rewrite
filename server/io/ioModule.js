const sharedSession = require('express-socket.io-session')
const ioReducer = require('./ioReducer');

module.exports = {
  //shares the passport user with the socket instance, adding it to socket.user
  //if no passport user object, set a default user object with a null id
  ioSessionMiddleware: (io, session) => {
    io.use(sharedSession(session, {
      autoSave: true
    }));
    io.use((socket, next) => {
      let { passport } = socket.handshake.session;
      socket.user = passport
                    ? passport.user
                    ? passport.user
                    : {_id: null}
                    : {_id: null};
      return next();
    })
  },
  //adds all of the socket event listeners and dispatchers to the app
  addListeners: (io) => {
    io.on('connect', (socket) => {
      console.log(`socket user ${socket.user._id} connected on ${socket.id}`)
      socket.on('disconnect', () => console.log(`socket user ${socket.user._id} disconnected from ${socket.id}`));
      socket.on('action', (action) => ioReducer(action, socket, io));
    })
    console.log('3/5...socket module initialized')
  }
};
