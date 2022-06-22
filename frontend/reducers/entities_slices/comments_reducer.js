import { RECEIVE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../../actions/post_actions";
import { REMOVE_COMMENT_LIKE, RECEIVE_COMMENT_LIKE, REMOVE_COMMENT} from '../../actions/comment_actions'
import { RECEIVE_USER } from "../../actions/user_actions";
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
        case RECEIVE_USER:
            return Object.assign({}, newState, action.payload.comments)
            
        // case REMOVE_POST:
        //     action.payload.post.commentIds.forEach((commentId)=>{
        //         delete newState[commentId];
        //     })
        //     return newState;
        case RECEIVE_POSTS:
            if (action.payload.comments){
                return Object.assign({}, newState, action.payload.comments)
            }else{
                return newState;
            }
        case REMOVE_COMMENT_LIKE:
            if (action.like.comment_id){
                for (let i = 0; i < newState[action.like.comment_id].likeIds.length; i++) {
                    if (newState[action.like.comment_id].likeIds[i] === action.like.id){
                        newState[action.like.comment_id].likeIds.splice(i, 1); 
                    }
                }
            }
            return newState;
        case RECEIVE_COMMENT_LIKE:
            console.log(((newState[action.like.comment_id])))
            newState[action.like.comment_id].likeIds.push(action.like.id);
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState
        case RECEIVE_COMMENT:
            return Object.assign(newState, {[action.comment.comment.id]: action.comment.comment})
        default:
            return oldState;
    }
}

export default commentsReducer;