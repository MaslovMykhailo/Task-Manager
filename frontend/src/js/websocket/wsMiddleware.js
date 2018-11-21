import * as types from '../constants/ActionTypes';
import * as messageCreators from './messageCreators';
import socket from './socket';
import throttle from './throttle';


const throttledChangeCardsSend = throttle(cards => {
  socket.send(messageCreators.changeCards(cards));
}, 2000);


export default store => next => action => {
  const result = next(action);
  
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      socket.send(messageCreators.userLogin(action.response.tokenId));
      break;
    }
    case types.MOVE_PROJECT_CARD:
    case types.EDIT_PROJECT_CARD:
    case types.REDO_CARDS:
    case types.UNDO_CARDS: {
      throttledChangeCardsSend(store.getState().cards.present.list);
      break;
    }
    default:
      break;
  }
  
  return result;
};