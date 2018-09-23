import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn ? (
        <Component {...props} />
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

export default connect(mapStateToProps)(PrivateRoute);