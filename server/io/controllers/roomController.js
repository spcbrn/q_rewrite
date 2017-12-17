module.exports = {
  joinRoom: (action, socket, io) => {
    let logMsg = `user ${socket.id} joined room ${action.data}`;

    socket.join(action.data)
    io.to(action.data).emit(
      'action',
      {
        type: 'JOIN_ROOM_CONFIRM',
        payload: logMsg
      }
    );
  }
};
