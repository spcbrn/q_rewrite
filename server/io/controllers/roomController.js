module.exports = {
  joinRoom: (action, socket, io) => {
    let room_id = action.data;
    let response = `user ${socket.id} joined room ${room_id}`;

    socket.join(room_id);
    io.to(room_id).emit(
      'action',
      {
        type: 'JOIN_ROOM_CONFIRM',
        payload: response
      }
    );
  }
};