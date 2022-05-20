export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
import * as PostApiUtil from '../util/post_api_util';


const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts: posts
})

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
})

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId: postId
})

export const fetchPosts = () => dispatch => (
    PostApiUtil.receivePosts()
        .then((posts)=>dispatch(receivePosts(posts)))
)

export const fetchPost= (postId) => dispatch => (
    PostApiUtil.receivePost(postId)
        .then((post)=>dispatch(receivePost(post)))
)

export const updatePost = (post) => dispatch => (
    PostApiUtil.updatePost(post)
        .then((post)=>dispatch(receivePost(post)))
)

export const createPost = (post) => dispatch => (
    PostApiUtil.createPost(post)
        .then((post)=>dispatch(receivePost(post)))
)

export const deletePost = (postId) => dispatch => (
    PostApiUtil.deletePost(postId)
        .then(()=>dispatch(removePost(postId)))
)