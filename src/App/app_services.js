import axios from 'axios';

const app_services = {
  serverRedirect: props => {
    let current_path = props.match.path;
    console.log(current_path);
    const add_user_and_forward = async ( props, source, user ) => {
      await props.setCurrentUser(user);
      // props.history.push(source);
    }

    axios.get(`/api/splash_redirect?source_url=${current_path}`).then(res => {
      return typeof res.data === 'string'
             ? window.location.assign(`http://localhost:8003${res.data}`)
             : add_user_and_forward(props, res.data.source, res.data.user);
    });
  },
  checkForSession: (status, props, _redirect) => status ? null : _redirect(props)
};

export default app_services;
