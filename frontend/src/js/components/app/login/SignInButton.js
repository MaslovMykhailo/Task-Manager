import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';

import googlePlusIcon from '../../../../img/g+.svg';
import { CLIENT_ID } from '../../../constants/Client';


const SignInButton = props => {
  const { isSignedIn, isRequesting, onSuccess, onRequest, onFailure, wsStatus } = props;
  if (isRequesting || wsStatus === 'close') {
    return (
      <div className={'login-button-wrapper'}>
        <button className={'mdl-button mdl-button--raised mdl-button--accent login-button'}
                disabled={true}>
          <img src={googlePlusIcon} className={'google-icon'}/>
          <span>Sign in with Google</span>
        </button>
        {
          wsStatus === 'close' ?
          <span className={'no-connection'}>
            Sorry! No connection with server!
          </span> : null
        }
      </div>
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
