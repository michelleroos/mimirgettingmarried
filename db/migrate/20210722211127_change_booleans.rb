class ChangeBooleans < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :phone
    remove_column :users, :friday
    remove_column :users, :saturday
    remove_column :users, :sunday
  end
end
