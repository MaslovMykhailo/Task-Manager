import * as types from '../constants/ActionTypes';


const defaultState = {
  status: 'close'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.OPEN_WS: {
      return { ...state, status: 'open' }
    }
    case types.CLOSE_WS: {
      return { ...state, status: 'close' }
    }
    default:
      return state;
  }
}