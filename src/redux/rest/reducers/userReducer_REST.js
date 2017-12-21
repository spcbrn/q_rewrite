const userState = {
  current_user: null
}

const GET_CURRENT_USER = 'GET_CURRENT_USER';


const userReducerREST = (state = userState, action) => {
  switch (action.type) {
    case `${GET_CURRENT_USER}_REJECTED`:
      return state;
    case `${GET_CURRENT_USER}_FULFILLED`:
      return Object.assign({}, state, { current_user: action.payload.data });
    default:
      return state;
  }
}

export default userReducerREST;
