class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :caption, null: false
      t.integer :author_id, null:false
    end
    add_index :posts, :author_id 
  end
end
