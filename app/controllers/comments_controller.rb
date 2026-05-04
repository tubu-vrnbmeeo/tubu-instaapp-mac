class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
  end

  def create
    post = Post.find(params[:post_id])
    @comment = post.comments.build(comment_params)
    @comment.save!

    render json: { content: @comment.content, accountName: @comment.user.account_name, avatarUrl: url_for(@comment.user.avatar_image) }
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id)
  end
end