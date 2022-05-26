json.extract! comment, :id, :username, :body, :post_id
json.likeIds comment.like_ids
# json.numLikes comment.like_ids.length




# json.likes do
#     comment.likes.each do |like|
#         json.set! like.id do
#             json.extract! like, :comment_id, :user_id, :username
#         end
#     end
# end