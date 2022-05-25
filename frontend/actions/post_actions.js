export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
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

export const deleteLike = (likeId)=>dispatch=>(
    LikeApiUtil.deleteLike(likeId)
        .then((post)=>dispatch(receivePost(post)))
)

export const createLike = (like)=>dispatch=>(
    LikeApiUtil.createLike(like)
        .then((post)=>dispatch(receivePost(post)))
)

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts()
        .then((posts)=>dispatch(receivePosts(posts)))
)

export const fetchPost = (postId) => dispatch => (
    PostApiUtil.fetchPost(postId)
        .then((payload)=>dispatch(receivePost(payload)))
)

export const updatePost = (post) => dispatch => (
    PostApiUtil.updatePost(post)
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