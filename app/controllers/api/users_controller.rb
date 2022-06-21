class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: ['Invalid Credentials'], status: 401
      end
    end

    def show
      @user = User.find_by(id: params[:id])
      render :show
    end

    def index
      if params[:query] 
        @users = User.where("username LIKE ?", "% " + "%" + params[:query] + "%" + " %")
          .or(User.where("username LIKE ?", "%" + params[:query] + "%"))
          .or(User.where("username LIKE ?", "%" + params[:query].capitalize + "%"))
          .or(User.where("username LIKE ?", "%" + params[:query].upcase + "%"))
          .or(User.where("username LIKE ?", "%" + params[:query].downcase + "%"))
          # .or(User.where("tags LIKE ?", "% " + "%" + params[:query] + "%" + " %"))
          # .or(User.where("tags LIKE ?", "%" + params[:query] + "%"))
          # .or(Listing.where("description LIKE ?", "% " + "%" + params[:query] + "%" + " %"))
          # .or(Listing.where("description LIKE ?", "%" + params[:query] + "%"))
        render :search_index
      else
        @users = User.all
        render :index
      end
    end
  
    private
    def user_params
      params.require(:user).permit(:password, :username)
    end
    
  end