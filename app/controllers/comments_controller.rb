class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def index
    post = Post.find(params[:post_id])
    @comments = post.comments
  end

  def create

  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
end