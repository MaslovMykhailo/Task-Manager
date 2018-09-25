import { combineReducers } from 'redux';

import status from './status';
import user from './user';
import projects from './projects';

export default combineReducers({
  status,
  user,
  projects
});