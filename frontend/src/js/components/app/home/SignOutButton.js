import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';

import '../../../../css/sign-(in-out)-button.css';


const SignOutButton = props => {
  const { isSignedIn, onSuccess } = props;
  return (
    isSignedIn ?
        <GoogleLogout
          className={'mdl-button mdl-js-button mdl-button--raised' +
          ' mdl-js-ripple-effect mdl-button--accent logout-button'}
          buttonText="Sign Out"
          onLogoutSuccess={onSuccess}
        /> :
        <Redirect to={'/login'}/>
  )
};

export default SignOutButton;