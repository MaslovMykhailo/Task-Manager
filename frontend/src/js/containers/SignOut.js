import { connect } from 'react-redux';

import { signOutSuccess } from '../actions';
import SignOutButton from '../components/SignOutButton';


const mapStateToProps = ({ status }) => ({
  isSignedIn: status.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  onSuccess: () => dispatch(signOutSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton);