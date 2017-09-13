class Api::UsersController < ApplicationController
    def index
        puts 'route hit'
        @users = User.all
        render json: @users
    end
    def show
        @user = User.find(params[:id])
        render json: @user
    end
    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: {
          message: 'User successfully deleted'
        }
      end
end
