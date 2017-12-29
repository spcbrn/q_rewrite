const sharedSession = require('express-socket.io-session')
const ioReducer = require('./serverReducer_IO');

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
    io.on('connect', socket => {
      //if there is no authenticated user on session, don't establish a socket connection with client
      if (!socket.user._id) return;
      let user = `${socket.user.first_name} ${socket.user.last_name}`

      console.log(`${user} connected on socket ${socket.id}`)

      socket.on('disconnect', () => console.log(`${user} disconnected from ${socket.id}`));
      //all socket 'action' events are sent through the io reducer
      socket.on('action', action => ioReducer(action, socket, io));
    })
    console.log('3/5...socket module initialized')
  }
};
