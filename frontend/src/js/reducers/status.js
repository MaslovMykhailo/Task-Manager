import * as types from '../constants/ActionTypes';

const defaultState = {
  isSignedIn: false,
  isRequesting: false
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
      return { ...defaultState }
    }
    default:
      return state;
  }
}