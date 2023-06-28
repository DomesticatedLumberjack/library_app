class CreateCheckoutRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :checkout_records do |t|
      t.boolean :active
      t.integer :user_id
      t.integer :book_inventory_id
      t.timestamps
    end
  end
end
