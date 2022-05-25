class Like < ApplicationRecord


    belongs_to :post,
        foreign_key: :post_id,
        class_name: 'Post',
        optional: true

    belongs_to :comment,
        foreign_key: :comment_id,
        class_name: 'Comment',
        optional: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'

    #how to do associations for this???

end