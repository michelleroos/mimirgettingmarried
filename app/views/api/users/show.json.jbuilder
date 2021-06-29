json.user do
    json.extract! @user, :id, :email, :first_name
end