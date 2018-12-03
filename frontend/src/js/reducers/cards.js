import undoable, { includeAction } from 'redux-undo';
import { arrayMove } from 'react-sortable-hoc';

import * as types from '../constants/ActionTypes';
import createId from '../createId';

const defaultState = {
  list: [],
  popupWindow: {
    id: undefined,
    type: undefined
  }
};

const cards = (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT_CARD: {
      const id = createId(action.projectConfig.name);
      
      const newCardList = state.list.slice();
      newCardList.push({ ...action.projectConfig, id });
      
      return { ...state, list: newCardList };
    }
    case types.EDIT_PROJECT_CARD: {
      const editedCard = { ...action.projectConfig };
      
      const index = state.list.findIndex(card => card.id === editedCard.id);
      const newCardList = state.list.slice();
      newCardList.splice(index, 1, editedCard);
      
      return { ...state, list: newCardList };
    }
    case types.REMOVE_PROJECT_CARD: {
      const index = state.list.findIndex(card => card.id === action.id);
      const newCardList = state.list.slice();
      newCardList.splice(index, 1);
    
      return { ...state, list: newCardList };
    }
    case types.MOVE_PROJECT_CARD: {
      const { oldIndex, newIndex } = action;
      return { ...state, list: arrayMove(state.list, oldIndex, newIndex) }
    }
    case types.GET_REMOTE_CARDS: {
      const { cards } = action;
      return { ...state, list: cards };
    }
    case types.OPEN_POPUP_WINDOW: {
      const { id, popupType } = action;
      
      return { ...state, popupWindow: { id, type: popupType }};
    }
    case types.CLOSE_POPUP_WINDOW: {
      return { ...state, popupWindow: { id: undefined, type: undefined }};
    }
    case types.SIGN_OUT_SUCCESS:
    case types.CLOSE_WS: {
      return defaultState;
    }
    default:
      return state;
  }
};

export default undoable(cards, {
  undoType: types.UNDO_CARDS,
  redoType: types.REDO_CARDS,
  filter: includeAction([
    types.CREATE_PROJECT_CARD,
    types.EDIT_PROJECT_CARD,
    types.REMOVE_PROJECT_CARD,
    types.MOVE_PROJECT_CARD
  ])
});
