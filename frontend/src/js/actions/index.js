import * as types from '../constants/ActionTypes';


export const signInRequest = () => ({ type: types.SIGN_IN_REQUEST });
export const signInSuccess = response => ({ type: types.SIGN_IN_SUCCESS, response });
export const signInFailure = () => ({ type: types.SIGN_IN_FAILURE });
export const signOutSuccess = () => ({ type: types.SIGN_OUT_SUCCESS });