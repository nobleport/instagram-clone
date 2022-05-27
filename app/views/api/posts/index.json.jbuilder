
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.partial! 'api/posts/post', post: post
        end
    end
end

json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :post_id, :username
                json.likeIds comment.like_ids
                json.userId comment.user_id
            end
        end
    end
end

json.likes do 
    @posts.each do |post|
        post.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :post_id, :user_id, :username
            end
        end
    end
end
