import * as types from '../constants/ActionTypes';

const defaultState = {
  isSignedIn: false,
  isRequesting: false,
  popupWindowIsOpen: false,
  dataIsLoading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SIGN_IN_REQUEST: {
      return { ...state, isRequesting: true };
    }
    case types.SIGN_IN_SUCCESS: {
      return { ...state,  isSignedIn: true, isRequesting: false, dataIsLoading: true };
    }
    case types.SIGN_IN_FAILURE:
    case types.SIGN_OUT_SUCCESS:
    case types.CLOSE_WS: {
      return  defaultState;
    }
    case types.OPEN_POPUP_WINDOW: {
      return { ...state, popupWindowIsOpen: true }
    }
    case types.CLOSE_POPUP_WINDOW: {
      return { ...state, popupWindowIsOpen: false }
    }
    case types.GET_REMOTE_CARDS:
    case types.GET_CURRENT_PROJECT_DATA: {
      return { ...state, dataIsLoading: false }
    }
    case types.OPEN_PROJECT: {
      return { ...state, dataIsLoading: true }
    }
    default:
      return state;
  }
}