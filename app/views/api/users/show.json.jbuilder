json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :friday, :saturday, :diet, :sunday
end