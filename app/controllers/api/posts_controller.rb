class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        if @post.create!
            render :show 
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = Post.find(params[:id])
    end

    def index
        @posts = Post.all
        render :index
    end

    def show
    end

    def edit
    end
    
    private 
    def post_params
        params.require(:post).permit(:caption, :author_id)
    end
end
