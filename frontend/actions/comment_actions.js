export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as CommentApiUtil from '../util/comment_api_util';

const receiveComment = (comment)=>({
    type: RECEIVE_COMMENT,
    comment: comment
})

const removeComment = (commentId)=>({
    type: REMOVE_COMMENT,
    commentId: commentId
})



export const createComment = (comment)=>dispatch=>(
    CommentApiUtil.createComment(comment)
        .then((comment)=>dispatch(receiveComment(comment)))
)

export const deleteComment = (commentId)=>dispatch=>(
    CommentApiUtil.deleteComment(commentId)
        .then(()=>dispatch(removeComment(commentId)))
)

