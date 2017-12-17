const initialState = {
  testSuccess: false
};

export const testToggle = () => {
  return {
    type: 'TEST_CASE',
    payload: true
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_CASE':
      return Object.assign({}, state, {testSuccess: action.payload});
    case 'JOIN_ROOM_CONFIRM':
      return state;
    default:
      return state;
  }
}

export default reducer;
