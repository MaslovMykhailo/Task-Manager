import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';

import googlePlusIcon from '../../../../img/g+.svg';


const SignInButton = props => {
  const { isSignedIn, isRequesting, onSuccess, onRequest, onFailure } = props;
  if (isRequesting) {
    return (
    <button className={'mdl-button mdl-js-button mdl-button--raised' +
    ' mdl-js-ripple-effect mdl-button--accent login-button'} disabled={true}>
      <img src={googlePlusIcon} className={'google-icon'}/>
      <span>Sign in with Google</span>
    </button>
    )
  } else {
    return (
      isSignedIn ? <Redirect to={'/home'}/> :
          <GoogleLogin
            clientId={'172468454646-3fciv2jsjjsq5vgq3qethn0rebm1pu61.apps.googleusercontent.com'}
            buttonText={'Login'}
            className={'mdl-button mdl-js-button mdl-button--raised' +
            ' mdl-js-ripple-effect mdl-button--accent login-button'}
            onSuccess={onSuccess}
            onFailure={onFailure}
            onRequest={onRequest}
            isSignedIn={true}
          >
            <img src={googlePlusIcon} className={'google-icon'}/>
            <span>Sign in with Google</span>
          </GoogleLogin>
    )
  }
};

export default SignInButton;
