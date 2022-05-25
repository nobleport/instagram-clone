json.set! "user" do
    json.extract! user, :id, :username
end

json.set! "posts" do
    user.posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :caption
            json.authorId user.id
            json.authorName user.username
            if post.photo.attached?
                json.photoUrl url_for(post.photo)
            else
                json.photoUrl ''
            end
        end
    end
end