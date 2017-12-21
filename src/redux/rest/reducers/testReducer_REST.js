const testState = {
  testSuccess: false
};


const testReducerREST = (state = testState, action) => {
  switch (action.type) {
    case 'TEST_CASE':
      return Object.assign({}, state, {testSuccess: action.payload});
    default:
      return state;
  }
}

export default testReducerREST;
