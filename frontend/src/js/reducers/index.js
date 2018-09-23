import { combineReducers } from 'redux';

import status from './status';
import user from './user';

export default combineReducers({
  status,
  user
});