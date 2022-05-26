json.comment do
    json.partial! 'api/comments/comment', comment: @comment
end

json.likes do
    @comment.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :comment_id, :user_id, :username
        end
    end
end
