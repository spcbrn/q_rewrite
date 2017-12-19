import axios from 'axios';

const app_services = {
  serverRedirect: props => {
    const add_user_and_forward = async (props, user) => await props.setCurrentUser(user);

    axios.get(`/api/splash_redirect?source_url`).then(res => {
      return typeof res.data === 'string'
             ? window.location.assign(`http://localhost:8003${res.data}`)
             : add_user_and_forward(props, res.data);
    });
  },
  checkForSession: (is_session, props, _redirect) => is_session ? null : _redirect(props)
};

export default app_services;
