import React from 'react';
import axios from 'axios';


const Splash = (props) => {

  serverRedirect(props);

  return (
    <div></div>
  )
}

export default Splash;





const serverRedirect = (props) => {
  axios.get('/api/splash_redirect').then(res => {
    return res.data.includes('auth')
           ? window.location.assign(`http://localhost:8003${res.data}`)
           : props.history.push(res.data)
  });
}
