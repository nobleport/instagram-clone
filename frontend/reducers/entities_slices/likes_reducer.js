import { RECEIVE_COMMENT, RECEIVE_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from "../../actions/comment_actions";
import { RECEIVE_LIKE, RECEIVE_POST, RECEIVE_POSTS, REMOVE_LIKE } from "../../actions/post_actions";


const likesReducer = (oldState={}, action)=>{
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_POST:
            if (action.payload.likes){
                return Object.assign({}, newState, action.payload.likes)
            }else{
                return newState;
            }
        case RECEIVE_POSTS:
            if (action.payload.likes){
                return Object.assign({}, newState, action.payload.likes)
            }else{
                return newState;
            }
        case RECEIVE_COMMENT:
            if (action.likes){
                return Object.assign({}, newState, action.likes)
            }else{
                return newState
            };
        case RECEIVE_COMMENT_LIKE:
            return Object.assign({}, newState, {[action.like.id]: action.like});
        case REMOVE_COMMENT_LIKE:
            delete newState[action.like.id];
            return newState;
        case RECEIVE_LIKE:
            return Object.assign({}, newState, {[action.like.id]: action.like});
        case REMOVE_LIKE:
            delete newState[action.like.id]
            return newState;
        default:
            return oldState;
    }
}

export default likesReducer;