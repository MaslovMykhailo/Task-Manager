import * as types from '../constants/ActionTypes';


export const signInRequest = () => ({ type: types.SIGN_IN_REQUEST });
export const signInSuccess = () => ({ type: types.SIGN_IN_SUCCESS });
export const signInFailure = () => ({ type: types.SIGN_IN_FAILURE });

