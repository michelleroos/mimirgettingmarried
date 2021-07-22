class AddAccountInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :address, :text
    add_column :users, :phone, :text
  end
end
