import * as types from '../constants/ActionTypes';


export const signInRequest = () => ({ type: types.SIGN_IN_REQUEST });
export const signInSuccess = response => ({ type: types.SIGN_IN_SUCCESS, response });
export const signInFailure = () => ({ type: types.SIGN_IN_FAILURE });
export const signOutSuccess = () => ({ type: types.SIGN_OUT_SUCCESS });
export const openPopupWindow = popupType => ({ type: types.OPEN_POPUP_WINDOW, popupType });
export const closePopupWindow = () => ({ type: types.CLOSE_POPUP_WINDOW });


export const createProjectCard = projectConfig => ({
  type: types.CREATE_PROJECT_CARD,
  config: projectConfig
});
export const editProjectCard = projectConfig => ({
  type: types.EDIT_PROJECT_CARD,
  config: projectConfig
});
