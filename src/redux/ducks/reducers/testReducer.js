const testState = {
  testSuccess: false
};


const testReducer = (state = testState, action) => {
  switch (action.type) {
    case 'TEST_CASE':
      return Object.assign({}, state, {testSuccess: action.payload});
    default:
      return state;
  }
}

export default testReducer;
