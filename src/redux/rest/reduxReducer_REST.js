import testReducer from './reducers/testReducer_REST';
import userReducer from './reducers/userReducer_REST';

const restReducer = {
  test: testReducer,
  users: userReducer
};

export default restReducer;
