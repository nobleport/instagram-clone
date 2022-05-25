import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function postIdReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
        if (action.postId){
           return action.postId; 
        }else{
            return null
        }
      
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}