json.set! "user" do
    json.extract! user, :id, :username
end

json.set! "posts" do
    user.posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :caption
            json.authorId user.id
            json.authorName user.username
            json.commentIds post.comment_ids
            json.likeIds post.like_ids
            json.numLikes post.like_ids.length
            if post.photo.attached?
                json.photoUrl url_for(post.photo)
            else
                json.photoUrl ''
            end
        end
    end
end

json.set! "comments" do
    user.posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :post_id, :username
                json.likeIds comment.like_ids
                json.numLikes comment.like_ids.length
                json.userId comment.user_id
            end
        end
    end
end

json.set! 'likes' do 
    user.posts.each do |post|
        post.comments.each do |comment|
            comment.likes.each do |like|
                json.set! like.id do
                    json.extract! like, :id, :post_id, :comment_id, :user_id, :username
                end
            end
        end
    end
end