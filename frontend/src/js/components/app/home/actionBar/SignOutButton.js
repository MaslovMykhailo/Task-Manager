import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';


const SignOutButton = props => {
  const { isSignedIn, onSuccess } = props;
  return (
    isSignedIn ?
        <GoogleLogout
          className={'mdl-button mdl-button--raised mdl-button--accent logout-button'}
          buttonText="Sign Out"
          onLogoutSuccess={onSuccess}
        /> :
        <Redirect to={'/login'}/>
  )
};

export default SignOutButton;