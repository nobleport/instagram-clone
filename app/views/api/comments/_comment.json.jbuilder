json.extract! comment, :id, :username, :body
json.likes do
    comment.likes.each do |like|
        json.set! like.id do
            json.extract! like, :comment_id, :user_id, :username
        end
    end
end