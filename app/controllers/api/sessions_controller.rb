class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only:[:destroy]
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if @user == nil 
        render json: ['Incorrect Password The password you entered is incorrect. Please Try again'], status: 401
      else 
        login(@user)
        render 'api/users/show'
      end
    end
  
    def destroy
      logout!
      render json: {}
    end
end