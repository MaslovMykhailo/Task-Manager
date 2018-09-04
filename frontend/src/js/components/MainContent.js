import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import '../../css/main-content.css';
import googlePlusIcon from '../../img/g+.svg';
import gitIcon from '../../img/git.svg';


const MainContent = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  
  return (
    <div className={'main-content'}>
      <div className={'creator'}>
        <a href={'https://github.com/maslovmichail20/Task-Manager'}>
          <span className="mdl-chip mdl-chip--contact">
            <span className="mdl-chip__contact mdl-color--red mdl-color-text--white">
              <img src={gitIcon} style={ {height: '100%', marginTop: '-11%'} }/>
            </span>
            <span className="mdl-chip__text">Source code</span>
          </span>
        </a>
      </div>
      <div className={'other'}>
        <GoogleLogin
          clientId='172468454646-3fciv2jsjjsq5vgq3qethn0rebm1pu61.apps.googleusercontent.com'
          buttonText='Login'
          className={'mdl-button mdl-js-button mdl-button--raised' +
          ' mdl-js-ripple-effect mdl-button--accent login-button'}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
          <img src={googlePlusIcon} style={ {height: '100%', marginBottom: '2%'} }/>
          <span>Sign in with Google</span>
        </GoogleLogin>
      </div>
    </div>
  )
};

export default MainContent;