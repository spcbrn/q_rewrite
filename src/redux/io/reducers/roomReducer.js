const roomState = {
  roomsActive: 0
}


const roomReducer = (state = roomState, action) => {
  switch (action.type) {
    case 'JOIN_ROOM_CONFIRM':
      return Object.assign({}, state, {roomsActive: ++state.roomsActive});
    case 'LEAVE_ROOM_CONFIRM':
      return Object.assign({}, state, {roomsActive: --state.roomsActive});
    default:
      return state;
  }
}

export default roomReducer;
