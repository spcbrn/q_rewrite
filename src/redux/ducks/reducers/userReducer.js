const userStates = {
  current_user: null
}

const GET_CURRENT_USER = 'GET_CURRENT_USER';


const userReducer = (state = userStates, action) => {
  switch (action.type) {
    case `${GET_CURRENT_USER}_REJECTED`:
      return state;
    case `${GET_CURRENT_USER}_FULFILLED`:
      return Object.assign({}, state, {current_user: action.payload.data});
    default:
      return state;
  }
}

export default userReducer;
