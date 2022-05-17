import { RECEIVE_ERRORS, RESET_ERRORS } from "../actions/session_actions";

const errorsReducer = (oldState=[], action)=>{
  

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors
    case RESET_ERRORS:
      return []
    default:
      return oldState;
  }
}

export default errorsReducer;