import * as types from '../constants/ActionTypes';


export const signInRequest = () => ({ type: types.SIGN_IN_REQUEST });
export const signInSuccess = response => ({ type: types.SIGN_IN_SUCCESS, response });
export const signInFailure = () => ({ type: types.SIGN_IN_FAILURE });
export const signOutSuccess = () => ({ type: types.SIGN_OUT_SUCCESS });


export const openPopupWindow = (popupType, id) => ({ type: types.OPEN_POPUP_WINDOW, popupType, id });
export const closePopupWindow = () => ({ type: types.CLOSE_POPUP_WINDOW });


export const createProjectCard = projectConfig => ({
  type: types.CREATE_PROJECT_CARD,
  projectConfig
});
export const editProjectCard = projectConfig => ({
  type: types.EDIT_PROJECT_CARD,
  projectConfig
});
export const removeProjectCard = id => ({
  type: types.REMOVE_PROJECT_CARD,
  id
});
export const moveProjectCard = (oldIndex, newIndex) => ({
  type: types.MOVE_PROJECT_CARD,
  oldIndex, newIndex
});
export const undoCards = () => ({ type: types.UNDO_CARDS});
export const redoCards = () => ({ type: types.REDO_CARDS});
export const getRemoteCards = cards => ({type: types.GET_ROMOTE_CARDS, cards});


export const openWs = () => ({ type: types.OPEN_WS });
export const closeWs = () => ({ type: types.CLOSE_WS });