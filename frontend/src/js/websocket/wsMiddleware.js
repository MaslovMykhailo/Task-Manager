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
      const cards = store.getState().cards.present.list;
      throttledChangeCardsSend(cards);
      break;
    }
    case types.CREATE_PROJECT_CARD: {
      const cards = store.getState().cards.present.list;
      socket.send(messageCreators.changeCards(cards));
      break;
    }
    case types.REMOVE_PROJECT_CARD: {
      const id = action.id;
      const cards = store.getState().cards.present.list;
      socket.send(messageCreators.removeCard(id, cards));
      break;
    }
    case types.SIGN_OUT_SUCCESS: {
      socket.send(messageCreators.userLogout());
      break;
    }
    default:
      break;
  }
  
  return result;
};