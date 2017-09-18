class Api::SwipesController < ApplicationController
    def index
        @user = User.find(params[:user_id])        
        @swipes = Swipes.all
    end

    def create

    end
end
