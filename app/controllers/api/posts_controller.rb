class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save!
            render :show 
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = Post.find(params[:id])
    end

    def index
        @posts = Post.all.includes(:user)
        render :index
    end

    def show
    end

    def edit
    end
    
    private 
    def post_params
        params.require(:post).permit(:caption, :photo)
    end
end
