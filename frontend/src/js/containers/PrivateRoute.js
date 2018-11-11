import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { connect } from 'react-redux';
import {signInFailure, signInSuccess} from '../actions';


const PrivateRoute = ({ component: Component, isSignedIn, onSuccess, onFailure, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn ? (
        <div>
          <Component {...props} />
          {/*{Shadow login for normal work of logout button}*/}
          <GoogleLogin
            clientId={'172468454646-3fciv2jsjjsq5vgq3qethn0rebm1pu61.apps.googleusercontent.com'}
            onSuccess={onSuccess} onFailure={onFailure} isSignedIn={true} style={{display: 'none'}}
          />
        </div>
      ) : (
        <Redirect
          push
          to={'/login'}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isSignedIn: state.status.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  onSuccess: response => dispatch(signInSuccess(response)),
  onFailure: () => dispatch(signInFailure())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);