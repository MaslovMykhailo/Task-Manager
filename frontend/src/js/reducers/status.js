import * as types from '../constants/ActionTypes';

const defaultState = {
  isSignedIn: false,
  isRequesting: false,
  popupWindowIsOpen: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SIGN_IN_REQUEST: {
      return { ...state, isRequesting: true };
    }
    case types.SIGN_IN_SUCCESS: {
      return { ...state,  isSignedIn: true, isRequesting: false };
    }
    case types.SIGN_IN_FAILURE:
    case types.SIGN_OUT_SUCCESS: {
      return { ...state, ...defaultState }
    }
    case types.OPEN_POPUP_WINDOW: {
      return {...state, popupWindowIsOpen: true }
    }
    case types.CLOSE_POPUP_WINDOW: {
      return {...state, popupWindowIsOpen: false }
    }
    default:
      return state;
  }
}