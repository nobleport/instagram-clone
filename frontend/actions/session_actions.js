export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';
import * as SessionApiUtil from '../util/session_api_util';

const recieveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors= () => ({
  type: RESET_ERRORS
});

export const login = function(user){
  return (dispatch)=>(
    SessionApiUtil.login(user)
      .then((user)=>(dispatch(recieveCurrentUser(user))),(errors) => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(()=>(dispatch(logoutCurrentUser())),(errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
    .then((user)=>(dispatch(recieveCurrentUser(user))),(errors) => dispatch(receiveErrors(errors.responseJSON)))
);
