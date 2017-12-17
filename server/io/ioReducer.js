const roomCtrl = require('./controllers/roomController');

module.exports = (action, socket, io) => {
  switch (action.type) {
    case 'server/join room':
      roomCtrl.joinRoom(action, socket, io);
      break;
    case 'server/leave room':
      console.log(`user ${socket.id} left room ${action.data}`);
      break;
    default:
      break;
  }
}
