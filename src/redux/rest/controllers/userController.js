import axios from 'axios';

const userController = {
  getSessionUser: () => {
    let request = axios.get('/api/user/current').then(res => res);
    return {type: 'GET_CURRENT_USER', payload: request}
  },
  setCurrentUser: user => { return { type: 'GET_CURRENT_USER_FULFILLED',
                                     payload: { data: user }}}
};

export default userController;
