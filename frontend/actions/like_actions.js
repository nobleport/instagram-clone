export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE'
import * as LikeApiUtil from '../util/like_api_util'

const receiveLike = (like)=>({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (likeId)=>({
    type: REMOVE_LIKE,
    likeId
})



