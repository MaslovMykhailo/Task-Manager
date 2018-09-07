import * as types from '../constants/ActionTypes';

const defaultState = {
  isSignedIn: false,
  isRequesting: false
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SIGN_IN_REQUEST: {
      return Object.assign({}, state, { isRequesting: true });
    }
    case types.SIGN_IN_SUCCESS: {
      return Object.assign({}, state, { isSignedIn: true, isRequesting: false });
    }
    case types.SIGN_IN_FAILURE: {
      return Object.assign({}, state, defaultState)
    }
    default:
      return state;
  }
}