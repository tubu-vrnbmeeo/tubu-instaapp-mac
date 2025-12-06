class AvatarsController < ApplicationController
  before_action :authenticate_user!
  def show
    if current_user.profile&.avatar&.attached?
      avatar = current_user.profile.avatar
      url = url_for(avatar)
    else
      url = 'not found'
    end
    render json: {url: url}
  end
end