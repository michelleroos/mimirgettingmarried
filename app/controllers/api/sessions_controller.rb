class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: ['ⓘ Unable to log in with provided credentials.'], status: 422
    end
  end

  def destroy 
    @user = current_user
    if @user
        log_out!
        render "api/users/show"
        # render {}
    else
        render json: ["No user is signed in"], status: 404
    end
  end

end
