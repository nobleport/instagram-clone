json.extract! post, :id, :caption

if post.photo.attached?
    json.photoUrl url_for(post.photo)
else
    json.photoUrl ''
end

json.authorId post.author_id
json.authorName post.user.username