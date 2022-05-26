export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_LIKE = 'RECEIVE_COMMENT_LIKE';
export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE';
import * as CommentApiUtil from '../util/comment_api_util';
import * as LikeApiUtil from '../util/like_api_util';
const receiveComment = (comment)=>({
    type: RECEIVE_COMMENT,
    comment: comment
})

const removeComment = (commentId)=>({
    type: REMOVE_COMMENT,
    commentId: commentId
})

const receiveCommentLike = (like)=> ({
    type: RECEIVE_COMMENT_LIKE,
    like
})

const removeCommentLike = (like)=> ({
    type: REMOVE_COMMENT_LIKE,
    like
})

export const createCommentLike = (like)=>dispatch=>(
    LikeApiUtil.createLike(like)
        .then((like)=>dispatch(receiveCommentLike(like)))
)

export const deleteCommentLike = (likeId)=>dispatch=>(
    LikeApiUtil.deleteLike(likeId)
        .then((like)=>dispatch(removeCommentLike(like)))
)

export const createComment = (comment)=>dispatch=>(
    CommentApiUtil.createComment(comment)
        .then((payload)=>dispatch(receiveComment(payload)))
)

export const deleteComment = (commentId)=>dispatch=>(
    CommentApiUtil.deleteComment(commentId)
        .then(()=>dispatch(removeComment(commentId)))
)

