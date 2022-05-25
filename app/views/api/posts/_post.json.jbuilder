
json.extract! post, :id, :caption

if post.photo.attached?
    json.photoUrl url_for(post.photo)
else
    json.photoUrl ''
end

json.authorId post.author_id
json.authorName post.user.username

json.likes do
    post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :post_id, :user_id, :username, :id
        end
    end
end

json.commentIds post.comment_ids
