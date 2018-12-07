import undoable, { includeAction } from 'redux-undo';

import * as types from '../constants/ActionTypes';
import createId from '../functions/createId';
import {arrayMove} from "react-sortable-hoc";

const emptyProject = {
  id: undefined,
  name: undefined,
  columns: [],
  popupWindow: {
    id: undefined,
    type: undefined,
    data: undefined,
  }
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
    case types.CREATE_TASK: {
      const { columnId, shortName, description, links, position } = action.taskConfig;
      const newColumns = state.columns.slice();
      let colIndex = newColumns.findIndex(col => col.id === columnId);

      const newTasks = newColumns[colIndex].tasks.slice();
      newTasks.splice(position, 0, {
        id: createId(shortName),
        columnId,
        shortName,
        description,
        links
      });

      newColumns[colIndex].tasks = newTasks;

      return { ...state, columns: newColumns };
    }
    case types.EDIT_TASK: {
      const { columnId, id, shortName, description, links, position } = action.taskConfig;

      const newColumns = state.columns.slice();

      const colIndex = newColumns.findIndex(col => col.id === columnId);
      const colTasks = newColumns[colIndex].tasks.slice();
      colTasks[position] = { id, shortName, description, links, columnId };

      newColumns[colIndex].tasks = colTasks;

      return { ...state, columns: newColumns };
    }
    case types.MOVE_TASK_INSIDE_COLUMN: {
      const { columnId, oldIndex, newIndex } = action;

      const newColumns = state.columns.slice();
      let colIndex = newColumns.findIndex(col => col.id === columnId);
      newColumns[colIndex].tasks = arrayMove(newColumns[colIndex].tasks, oldIndex, newIndex);

      return { ...state, columns: newColumns };
    }
    case types.MOVE_TASK_TO_ANOTHER_COLUMN: {
      const { oldColumnId, newColumnId, id, shortName, description, links, position } = action.taskConfig;

      const newColumns = state.columns.slice();

      const oldColIndex = newColumns.findIndex(col => col.id === oldColumnId);
      const oldColTasks = newColumns[oldColIndex].tasks.slice();
      oldColTasks.splice(oldColTasks.findIndex(task => task.id === id), 1);
      newColumns[oldColIndex].tasks = oldColTasks;

      const newColIndex = newColumns.findIndex(col => col.id === newColumnId);
      const newColTasks = newColumns[newColIndex].tasks.slice();
      newColTasks.splice(position - 1, 0, { id, shortName, description, links, newColumnId });
      newColumns[newColIndex].tasks = newColTasks;

      return { ...state, columns: newColumns };
    }
    case types.REMOVE_TASK: {
      const { columnId, position } = action;

      const newColumns = state.columns.slice();
      let colIndex = newColumns.findIndex(col => col.id === columnId);
      const newTasks = newColumns[colIndex].tasks.slice();
      newTasks.splice(position, 1);
      newColumns[colIndex].tasks = newTasks;

      return { ...state, columns: newColumns };
    }
    case types.OPEN_POPUP_WINDOW: {
      const { id, popupType } = action;
      if (popupType !== 'create' || popupType !== 'edit') {
        return { ...state, popupWindow: { id, type: popupType, data: undefined }};
      } else {
        return state;
      }
    }
    case types.CLOSE_POPUP_WINDOW: {
      return { ...state, popupWindow: emptyProject.popupWindow };
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
  redoType: types.REDO_CURRENT_PROJECT,
  filter: includeAction([
    types.CREATE_TASK_COLUMN,
    types.EDIT_TASK_COLUMN,
    types.REMOVE_TASK_COLUMN,
    types.MOVE_TASK_COLUMN
  ])
});