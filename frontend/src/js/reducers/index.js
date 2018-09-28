import { combineReducers } from 'redux';

import status from './status';
import user from './user';
import cards from './cards';

export default combineReducers({
  status,
  user,
  cards
});