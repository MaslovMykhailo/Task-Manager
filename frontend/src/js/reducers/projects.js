import * as types from '../constants/ActionTypes';

const defaultState = {
  popupWindow: {
    id: undefined,
    type: undefined
  },
  cardList: []
};

const createId = (name) => {
  return Math.round(Math.random() * 100) + '-' +
    name.toLowerCase().split(' ').join('-') +
    '-' + new Date().getDate();
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT_CARD: {
      const { name, description, cardColor } = action.projectConfig;
      const id = createId(name);
      
      const newCardList = state.cardList.slice();
      newCardList.push(id);
      
      return { ...state, cardList: newCardList, [id]: { name, description, cardColor }};
    }
    case types.EDIT_PROJECT_CARD: {
      const { name, description, cardColor, id } = action.projectConfig;
      
      return { ...state, [id]: { name, description, cardColor }};
    }
    case types.OPEN_POPUP_WINDOW: {
      const { id, popupType } = action;
      
      return { ...state, popupWindow: { id, type: popupType }};
    }
    case types.CLOSE_POPUP_WINDOW: {
      return { ...state, popupWindow: { id: undefined, type: undefined }};
    }
    default:
      return state;
  }
}