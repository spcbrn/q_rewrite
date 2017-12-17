module.exports = {
  joinRoom: (action, socket, io) => {
    socket.join(action.data)
    let logMsg = `user ${socket.id} joined room ${action.data}`;
    console.log(logMsg);
    io.to(action.data).emit(
      'action',
      {
        type: 'JOIN_ROOM_CONFIRM',
        payload: logMsg
      }
    );
  }
};
