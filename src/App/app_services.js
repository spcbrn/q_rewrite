import axios from 'axios';



const app_services = {
  checkForSession: (is_session, props, _redirect, src_) => is_session
                                                           ? null
                                                           : _redirect(props, src_),
  serverRedirect: (props, src_path) => {
    const add_user_and_forward = async (props, user) => await props.setCurrentUser(user);

    axios.get(`/api/splash_redirect?src_=${src_path}`).then(res => {
      return typeof res.data === 'string'
             ? window.location.assign(`http://localhost:8003${res.data}`)
             : add_user_and_forward(props, res.data);
    });
  }
};

export default app_services;
