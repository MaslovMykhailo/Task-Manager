import undoable from 'redux-undo';

import * as types from '../constants/ActionTypes';
import createId from '../functions/createId';
import {arrayMove} from "react-sortable-hoc";

const emptyProject = {
  id: undefined,
  name: undefined,
  columns: []
};

const currentProject =  (state = emptyProject, action) => {
  switch (action.type) {
    case types.CREATE_TASK_COLUMN: {
      const newColumns = state.columns.slice();
      const { name, color } = action.columnConfig;
      newColumns.push({
        id: createId(name),
        name, color,
        tasks: []
      });
      return { ...state, columns: newColumns };
    }
    case types.EDIT_TASK_COLUMN: {
      const newColumns = state.columns.slice();
      const { id, name, color } = action.columnConfig;
      let index = newColumns.findIndex(column => column.id === id);
      newColumns[index] = {
        id, name, color,
        tasks: state.columns[index].tasks.slice()
      };
      return { ...state, columns: newColumns };
    }
    case types.REMOVE_TASK_COLUMN: {
      let index = state.columns.findIndex(column => column.id === action.id);
      const newColumns = state.columns.slice();
      newColumns.splice(index, 1);
      return { ...state, columns: newColumns };
    }
    case types.MOVE_TASK_COLUMN: {
      const { oldIndex, newIndex } = action;
      return { ...state, columns: arrayMove(state.columns, oldIndex, newIndex) }
    }
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