class Api::PostslikesController < Api::ApplicationController
  before_action :authenticate_user!
  def show
    posts = Post.all
    postslikes = posts.map{ |post| [post.id, current_user.has_liked?(post)] }.to_h
    render json: postslikes
  end
end