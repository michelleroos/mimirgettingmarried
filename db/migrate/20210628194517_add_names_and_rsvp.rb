class AddNamesAndRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :friday, :boolean
    add_column :users, :saturday, :boolean
    add_column :users, :sunday, :boolean
    add_column :users, :diet, :string
  end
end
