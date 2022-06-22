class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.username = current_user.username
        @comment.user_id = current_user.id
        @comment.save!
        render :show
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end

    def index
        @post = Post.find_by(id: params[post_id])
        render :index
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end
