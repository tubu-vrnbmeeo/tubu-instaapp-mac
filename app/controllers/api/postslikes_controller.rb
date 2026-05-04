class Api::PostslikesController < Api::ApplicationController
  def show
    posts = Post.all
    if user_signed_in?
      postslikes = posts.map{|post| [post.id, current_user.has_liked?(post)]}.to_h
      postslikes['userStatus'] = 'ok'
      render json: postslikes
    else
      render json: { userStatus: 'not signed in'}
    end
  end
end