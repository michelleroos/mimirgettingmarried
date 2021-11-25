class Api::UsersController < ApplicationController

    protect_from_forgery prepend: true

    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: ['User not found'], status: 404
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def destroy
    # end

    private
    
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :friday, :saturday, :sunday, :diet, :phone, :address)
    end

end
