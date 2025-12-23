class ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @profile = current_user.profile
  end

  def edit
    @profile = current_user.prepare_profile
  end

  def update
    profile = current_user.prepare_profile
    profile.assign_attributes(profile_params)
    profile.save!

    avatar = current_user.profile.avatar
    url = url_for(avatar)
    render json: { url: url }
  end


  private
  def profile_params
    params.require(:profile).permit(:avatar)
  end
end