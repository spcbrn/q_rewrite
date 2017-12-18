module.exports = {
  joinRoom: (action, socket, io) => {
    let room_id = action.data;
    let response = `user ${socket.id} joined room ${room_id}`;

    socket.join(room_id);
    io.in(room_id).emit(
      'action',
      {
        type: 'JOIN_ROOM_CONFIRM',
        payload: response
      }
    );
  },
  leaveRoom: (action, socket, io) => {
    let room_id = action.data;
    let response = `user ${socket.id} left room ${room_id}`;

    socket.leave(room_id);
    io.in(room_id).emit(
      'action',
      {
        type: 'LEAVE_ROOM_CONFIRM',
        payload: response
      }
    );
    io.to(socket.id).emit(
      'action',
      {
        type: 'LEAVE_ROOM_CONFIRM',
        payload: response
      }
    );
  }
};
