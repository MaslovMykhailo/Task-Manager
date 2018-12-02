import undoable from 'redux-undo';

import * as types from '../constants/ActionTypes';


const emptyProject = {
  id: undefined,
  name: undefined,
  columns: []
};

const currentProject =  (state = emptyProject, action) => {
  switch (action.type) {
    case types.GET_CURRENT_PROJECT_DATA: {
      return action.project;
    }
    case types.GET_REMOTE_PROJECT_DATA: {
      if (state.id === action.project.id) {
        return action.project;
      } else {
        return state;
      }
    }
    case types.CLOSE_PROJECT: {
      return emptyProject;
    }
    default:
      return state;
  }
};

export default undoable(currentProject, {
  undoType: types.UNDO_CURRENT_PROJECT,
  redoType: types.REDO_CURRENT_PROJECT
});