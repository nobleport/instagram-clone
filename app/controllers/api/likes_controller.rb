class Api::LikesController < ApplicationController
    def create
        @like = Like.new(likes_params)
        @like.user_id = current_user.id
        @like.username = current_user.username
        @like.save!
        @post = @like.post
        render '/api/posts/show'
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        @like.destroy!
        @post = @like.post
        render '/api/posts/show'
    end
    
    private

    def likes_params
        params.require(:like).permit(:post_id, :comment_id)
    end
    
end
