import { connect } from 'react-redux';

import { signInRequest, signInSuccess, signInFailure } from '../actions';
import SignInButton from '../components/SignInButton';

const mapStateToProps = ({ status }) => ({
  isSignedIn: status.isSignedIn,
  isRequesting: status.isRequesting
});

const mapDispatchToProps = dispatch => ({
  onSuccess: response => dispatch(signInSuccess(response)),
  onRequest: () => dispatch(signInRequest()),
  onFailure: () => dispatch(signInFailure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInButton);

