module.exports = {
  joinRoom: (action, socket, io) => {
    let room_id = action.data;
    let action_obj = {
      type: 'JOIN_ROOM_CONFIRM',
      payload: `user ${socket.id} joined room ${room_id}`
    };

    socket.join(room_id);
    io.in(room_id).emit('action', action_obj);
  },
  leaveRoom: (action, socket, io) => {
    let room_id = action.data;
    let action_obj = {
      type: 'LEAVE_ROOM_CONFIRM',
      payload: `user ${socket.id} left room ${room_id}`
    };

    socket.leave(room_id);
    io.in(room_id).emit('action', action_obj);
    io.to(socket.id).emit('action', action_obj);
  }
};
