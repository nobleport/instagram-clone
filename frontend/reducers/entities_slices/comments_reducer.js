import { RECEIVE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../../actions/post_actions";
const commentsReducer = (oldState={}, action)=>{
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_POST:
            if (action.payload.comments){
                return Object.assign({}, newState, action.payload.comments)
            }else{
                return newState;
            }
        case RECEIVE_POSTS:
            if (action.payload.comments){
                return Object.assign({}, newState, action.payload.comments)
            }else{
                return newState;
            }
        case RECEIVE_COMMENT:
            return Object.assign(newState, {[action.comment.id]: action.comment})
        default:
            return oldState;
    }
}

export default commentsReducer;