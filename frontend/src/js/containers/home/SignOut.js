import { connect } from 'react-redux';

import { signOutSuccess } from '../../actions/index';
import SignOutButton from '../../components/app/home/SignOutButton';


const mapStateToProps = ({ status }) => ({
  isSignedIn: status.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  onSuccess: () => dispatch(signOutSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton);