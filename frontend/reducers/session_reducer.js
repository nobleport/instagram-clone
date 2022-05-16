import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


let _defaultSession = {id: null};
const sessionReducer = (oldState=_defaultSession, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let id = action.user.id;
      newState[id] = id
     return newState
    case LOGOUT_CURRENT_USER:
       newState = _defaultSession
    default:
     return oldState
  }
}

export default sessionReducer;