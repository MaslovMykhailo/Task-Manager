import React from 'react';
import { GoogleLogout } from 'react-google-login';


const SignOutButton = props => {
  const { onSuccess } = props;
  return (
    <GoogleLogout
      className={'mdl-button mdl-button--raised mdl-button--accent logout-button'}
      buttonText="Sign Out"
      onLogoutSuccess={onSuccess}
    />
  )
};

export default SignOutButton;