import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

let _defaultSession = {currentUser: null};
const sessionReducer = (oldState=_defaultSession, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser: action.user})
      // return Object.assign({}, action.user)
    case LOGOUT_CURRENT_USER:
       return _defaultSession
    default:
     return oldState
  }
}

export default sessionReducer;