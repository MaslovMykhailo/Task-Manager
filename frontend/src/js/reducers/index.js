import { combineReducers } from 'redux';

import status from './status';
import user from './user';
import cards from './cards';
import ws from './ws';

export default combineReducers({
  status,
  user,
  cards,
  ws
});