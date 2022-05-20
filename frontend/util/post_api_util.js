export const receivePosts = ()=>{
    return $.ajax({
        url: "/api/posts",
        method: "GET"
    })
}

export const receivePost = (postId)=> {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "GET"
    })
}

export const createPost = (post)=> {
    return $.ajax({
        url: "/api/posts",
        method: "POST",
        data: {post: post}
    })
}

export const updatePost = (post) => {
    return $.ajax({
        url: `/api/posts/${post.id}/edit`,
        method: "GET"
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "DELETE"
    })
}