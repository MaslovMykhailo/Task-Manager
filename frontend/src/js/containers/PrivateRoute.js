import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { connect } from 'react-redux';
import { signInFailure, signInSuccess } from '../actions';
import { CLIENT_ID } from "../constants/Client";


const PrivateRoute = ({ component: Component, isSignedIn, onSuccess, onFailure, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn ? (
        <div>
          <Component {...props} />
          {/*{Shadow login for normal work of logout button after page restore}*/}
          <GoogleLogin
            clientId={CLIENT_ID}
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