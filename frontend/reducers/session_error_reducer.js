import { RECEIVE_ERRORS } from "../actions/session_actions";

const errorsReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_ERRORS:
      newState = action.errors
      return newState
    default:
      return oldState;
  }
}

export default errorsReducer;