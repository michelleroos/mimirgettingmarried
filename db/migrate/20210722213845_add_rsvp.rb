class AddRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friday, :string
    add_column :users, :saturday, :string
    add_column :users, :sunday, :string
    add_column :users, :phone, :string
  end
end
