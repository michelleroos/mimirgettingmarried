class DropClearanceColumnsSecondTry < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :encrypted_password
    remove_column :users, :confirmation_token
    remove_column :users, :remember_token
  end
end
