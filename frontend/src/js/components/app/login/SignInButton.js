import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';

import googlePlusIcon from '../../../../img/g+.svg';
import { CLIENT_ID } from '../../../constants/Client';


const SignInButton = props => {
  const { isSignedIn, isRequesting, onSuccess, onRequest, onFailure } = props;
  if (isRequesting) {
    return (
    <button className={'mdl-button mdl-button--raised mdl-button--accent login-button'}
            disabled={true}>
      <img src={googlePlusIcon} className={'google-icon'}/>
      <span>Sign in with Google</span>
    </button>
    )
  } else {
    return (
      isSignedIn ? <Redirect to={'/home'}/> :
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText={'Login'}
            className={'mdl-button mdl-button--raised mdl-button--accent login-button'}
            onSuccess={onSuccess}
            onFailure={onFailure}
            onRequest={onRequest}
          >
            <img src={googlePlusIcon} className={'google-icon'}/>
            <span>Sign in with Google</span>
          </GoogleLogin>
    )
  }
};

export default SignInButton;
