import { connect } from 'react-redux';

import { signOutSuccess } from '../../actions/index';
import SignOutButton from '../../components/app/home/actionBar/SignOutButton';


const mapDispatchToProps = dispatch => ({
  onSuccess: () => dispatch(signOutSuccess())
});

export default connect(undefined, mapDispatchToProps)(SignOutButton);