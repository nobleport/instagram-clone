import {RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_LIKE, REMOVE_LIKE} from "../../actions/post_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
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
        case REMOVE_LIKE:
            if (action.like.post_id){
                for (let i = 0; i < newState[action.like.post_id].likeIds.length; i++) {
                    if (newState[action.like.post_id].likeIds[i] === action.like.id){
                        newState[action.like.post_id].likeIds.splice(i, 1); 
                    }
                }
            }
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.post_id].likeIds.push(action.like.id);
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment.comment.post_id].commentIds = [...newState[action.comment.comment.post_id].commentIds, action.comment.comment.id]
            // newState[action.comment.comment.post_id].commentIds.push(action.comment.comment.id);
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
}

export default postsReducer;