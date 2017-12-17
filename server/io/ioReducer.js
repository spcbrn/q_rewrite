const roomCtrl = require('./controllers/roomController');

module.exports = (action, socket, io) => {
  switch (action.type) {
    case 'server/join room':
      console.log(`user ${socket.user.id} joined room ${action.data}`);
      roomCtrl.joinRoom(action, socket, io);
      break;
    case 'server/leave room':
      console.log(`user ${socket.user.id} left room ${action.data}`);
      roomCtrl.leaveRoom(action, socket, io);
      break;
    default:
      break;
  }
}
