import axios from 'axios';

const userController = {
  getUser: () => {
    let request = axios.get('/api/user/current').then(res => res);
    return {type: 'GET_CURRENT_USER', payload: request}
  }
}

export default userController;
