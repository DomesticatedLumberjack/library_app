class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.boolean :active
      t.string :image_url

      t.timestamps
    end
  end
end
