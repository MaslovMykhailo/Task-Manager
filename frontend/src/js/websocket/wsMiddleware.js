import * as types from '../constants/ActionTypes';
import * as messageCreators from './messageCreators';
import socket from './socket';


export default store => next => action => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      socket.send(messageCreators.userLogin(action.response.tokenId));
      break;
    }
    default:
      break;
  }
  
  return next(action);
};