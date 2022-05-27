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
        if @post
            @post.destroy
        end
    end

    def index
        @posts = Post.all.includes(:user)
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def update
        @post = Post.find_by(id: params[:id])
        if post_params[:photo]
            @post.update(caption: post_params[:caption], photo: post_params[:photo])
            render :show
        else 
            @post.update(caption: post_params[:caption])
            render :show
        end
    end

    
    
    private 
    def post_params
        # debugger
        params.require(:post).permit(:caption, :photo)
    end
end
