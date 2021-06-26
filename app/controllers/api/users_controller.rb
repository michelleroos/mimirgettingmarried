class Api::UsersController < ApplicationController

        def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            # render :show
            render json: ['Sign up successful'], status: 200
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = current_user
        if @user
            render :show
        else
            render json: ['User not found'], status: 404
        end
    end

    # def update
    # end

    # def destroy
    # end

    private
    
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end

end
