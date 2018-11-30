import { combineReducers } from 'redux';

import status from './status';
import user from './user';
import cards from './cards';
import ws from './ws';
import currentProject from './currentProject';

export default combineReducers({
  status,
  user,
  cards,
  currentProject,
  ws
});