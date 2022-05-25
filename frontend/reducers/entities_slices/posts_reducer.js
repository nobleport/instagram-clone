import {RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from "../../actions/post_actions";
import { RECEIVE_USER } from "../../actions/user_actions"

const postsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload.posts; 
        case RECEIVE_USER:
            return Object.assign({}, action.payload.posts)
        case RECEIVE_POST:
            return Object.assign(newState, {[action.payload.post.id]:action.payload.post})
        default:
            return oldState;
    }
}

export default postsReducer;