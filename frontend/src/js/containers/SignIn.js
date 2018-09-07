import { connect } from 'react-redux';

import { signInRequest, signInSuccess, signInFailure } from '../actions';
import SignInButton from '../components/SignInButton';

const mapStateToProps = ({ isSignedIn, isRequesting }) => ({
  isSignedIn,
  isRequesting
});

const mapDispatchToProps = dispatch => ({
  onSuccess: () => dispatch(signInSuccess()),
  onRequest: () => dispatch(signInRequest()),
  onFailure: () => dispatch(signInFailure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInButton);

