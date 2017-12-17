module.exports = (action, socket) => {
  switch (action.type) {
    case 'server/join room':
      console.log(`user ${socket.id} joined room ${action.data}`)
    default:
      break;
  }
}
