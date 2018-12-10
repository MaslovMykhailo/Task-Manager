import * as sendTypes from '../constants/SendMessageTypes';

export const userLogin = token => ({
  type: sendTypes.USER_LOGIN,
  token
});

export const userLogout = () => ({
  type: sendTypes.USER_LOGOUT
});

export const changeCards = cards => ({
  type: sendTypes.CHANGE_CARDS,
  cards
});

export const openProject = projectId => ({
  type: sendTypes.OPEN_PROJECT,
  projectId
});

export const changeProject = project => ({
  type: sendTypes.CHANGE_PROJECT,
  project
});

export const closeProject = projectId => ({
  type: sendTypes.CLOSE_PROJECT,
  projectId
});