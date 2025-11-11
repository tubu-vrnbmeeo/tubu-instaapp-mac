class AvatarsController < ApplicationController
  before_action :authenticate_user!
  def show
    profile = current_user.profile
    avatar = profile.avatar
    render json: avatar
  end
end