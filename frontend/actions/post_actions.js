export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
import * as PostApiUtil from '../util/post_api_util';
import * as LikeApiUtil from '../util/like_api_util'


const receivePosts = (payload) => ({
    type: RECEIVE_POSTS,
    payload
})

const receivePost = (payload) => ({
    type: RECEIVE_POST,
    payload
})

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId: postId
})

const receiveLike = (like)=> ({
    type: RECEIVE_LIKE,
    like
})
const removeLike = (like)=> ({
    type: REMOVE_LIKE,
    like
})

export const createLike = (like)=>dispatch=>(
    LikeApiUtil.createLike(like)
        .then((like)=>dispatch(receiveLike(like)))
)

export const deleteLike = (likeId)=>dispatch=>(
    LikeApiUtil.deleteLike(likeId)
        .then((like)=>dispatch(removeLike(like)))
)

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts()
        .then((posts)=>dispatch(receivePosts(posts)))
)

export const fetchPost = (postId) => dispatch => (
    PostApiUtil.fetchPost(postId)
        .then((payload)=>dispatch(receivePost(payload)))
)

export const updatePost = (post, postId) => dispatch => (
    PostApiUtil.updatePost(post, postId)
        .then((payload)=>dispatch(receivePost(payload)))
)

export const createPost = (post) => dispatch => (
    PostApiUtil.createPost(post)
        .then((payload)=>dispatch(receivePost(payload)))
)

export const deletePost = (postId) => dispatch => (
    PostApiUtil.deletePost(postId)
        .then(()=>dispatch(removePost(postId)))
)