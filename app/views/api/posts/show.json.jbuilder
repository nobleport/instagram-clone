json.post do
    json.partial! 'api/posts/post', post: @post
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :post_id, :username
            json.likeIds comment.like_ids
            json.numLikes comment.like_ids.length
            json.userId comment.user_id
        end
    end
end

json.likes do
    @post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :post_id, :user_id, :username
        end
    end
end