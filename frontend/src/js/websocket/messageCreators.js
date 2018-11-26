import * as sendTypes from '../constants/SendMessageTypes';

export const userLogin = token => ({
  type: sendTypes.USER_LOGIN,
  token: token
});

export const userLogout = () => ({
  type: sendTypes.USER_LOGOUT
});

export const changeCards = cards => ({
  type: sendTypes.CHANGE_CARDS,
  cards: cards
});