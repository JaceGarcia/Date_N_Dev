class Api::UsersController < ApplicationController
    before_action :authenticate_user!
    def index
        puts 'route hit'
        @users = User.order("RANDOM()").first
        render json: @users
    end

    def edit
        @user = User.find(params[:id])
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

      private

      def user_params

      end
end
