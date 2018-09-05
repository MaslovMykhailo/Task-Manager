import { connect } from 'react-redux';

import { signIn } from '../actions';
import SignInButton from '../components/SignInButton';

const mapStateToProps = state => ({
  isSignedIn: state.signedIn
});

const mapDispatchToProps = dispatch => ({
  responseGoogle: () => dispatch(signIn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInButton);

