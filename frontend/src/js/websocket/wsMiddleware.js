import * as types from '../constants/ActionTypes';
import socket from './socket';


export default store => next => action => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      console.log(action.response);
      socket.send({type: 'USER_LOGIN', token: action.response.tokenId });
      break;
    }
    default:
      break;
  }
  
  return next(action);
};