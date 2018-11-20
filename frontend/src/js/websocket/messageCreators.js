import * as sendTypes from '../constants/SendMessageTypes';

export const userLogin = token => ({
  type: sendTypes.USER_LOGIN,
  token: token
});

export const userLogout = () => ({
  type: sendTypes.USER_LOGIN
});

export const changeCards = cards => ({
  type: sendTypes.CHANGE_CARDS,
  cards: cards
});

export const removeCard = (id, cards) => ({
  type: sendTypes.REMOVE_CARD,
  id: id,
  cards: cards
});