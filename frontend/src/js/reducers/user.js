import * as types from '../constants/ActionTypes';

const defaultState = {
  name: undefined,
  imageUrl: undefined
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      const { name, imageUrl } = action.response.profileObj;
      return { ...state, name, imageUrl };
    }
    case types.SIGN_OUT_SUCCESS:
    case  types.CLOSE_WS: {
      return defaultState;
    }
    default:
      return state;
  }
}