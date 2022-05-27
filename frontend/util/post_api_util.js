export const fetchPosts = ()=>{
    return $.ajax({
        url: "/api/posts",
        method: "GET"
    })
}

export const fetchPost = (postId)=> {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "GET"
    })
}

export const createPost = (formData)=> {
    return $.ajax({
        url: "/api/posts",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updatePost = (formData, postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "DELETE"
    })
}