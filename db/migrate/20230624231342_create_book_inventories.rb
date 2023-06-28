class CreateBookInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :book_inventories do |t|
      t.integer :book_id
      t.boolean :checked_out
      t.timestamps
    end
  end
end
