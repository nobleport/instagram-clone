class Comment < ApplicationRecord
    validates :body, presence: true
    validates :user_id, presence: true

    belongs_to :post,
        foreign_key: :post_id,
        class_name: 'Post'
    
    has_many :likes,
        foreign_key: :comment_id,
        class_name: 'Like'
        # optional: true

    def created_at
        attributes['created_at'].strftime("%m/%d/%Y %H:%M")
    end
end
