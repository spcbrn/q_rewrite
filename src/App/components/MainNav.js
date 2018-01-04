import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './styles/MainNav.css';

import app_services from './../app_services';
import { default as restCtrl } from './../../redux/rest/actionsController_REST';

const { setCurrentUser } = restCtrl;



const MainNav = props => {
  const { checkForSession, serverRedirect } = app_services;
  const Splash = () => <div id="splash_box"></div>;

  checkForSession(props.is_session, props, serverRedirect, window.location.pathname);

  return (
    <nav id="main_nav">
      { props.is_session ? null : Splash() }  {/*add fade transition?*/}
      <Link to="/studentq">studentq</Link>
      <Link to="/test"> test</Link>
      <Link to="/admin/dashboard"> admin dashboard</Link>
      <Link to="/admin/q_preferences"> preferences</Link><br />
      { props.is_session ? `Welcome, ${props.user.first_name}.` : null }
    </nav>
  )
};




const mapStateToProps = state => {
  return {
    is_session: !state.users.current_user ? false : true,
    user: state.users.current_user
  }
};

export default withRouter( connect(mapStateToProps, { setCurrentUser })(MainNav) );
