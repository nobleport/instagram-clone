class Post < ApplicationRecord
    validates :author_id, presence: true
    validates :caption, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: 'User'

    has_one_attached :photo

    has_many :comments,
        foreign_key: :post_id,
        class_name: 'Comment'
    
    has_many :likes,
        foreign_key: :post_id,
        class_name: 'Like'
        # optional: true
    
end
