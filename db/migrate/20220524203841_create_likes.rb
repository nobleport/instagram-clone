class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :post_id
      t.integer :comment_id
      t.integer :user_id, null: false
      t.string :username, null: false
      t.timestamps
    end
    add_index :likes, :user_id 
    add_index :likes, :comment_id
    add_index :likes, :post_id
  end
end
