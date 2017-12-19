import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles/MainNav.css';

import app_services from './../app_services';
import { default as restCtrl } from './../../redux/rest/restActionsController';

const { setCurrentUser } = restCtrl;



const MainNav = (props) => {
  const { checkForSession, serverRedirect } = app_services;
  const Splash = () => <div id="splash_box"></div>;
  
  checkForSession(props.is_session, props, serverRedirect);

  return (
    <nav id="main_nav">
      { props.is_session ? null : Splash() }
    </nav>
  )
};



const mapStateToProps = state => { return { is_session: ( state.users.current_user === null
                                                          ? false : true )}};

export default withRouter(
  connect( mapStateToProps, { setCurrentUser } )(MainNav)
);
