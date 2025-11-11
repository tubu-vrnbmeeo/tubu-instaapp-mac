# frozen_string_literal: true

module UserDecorator

  def avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'Group 5.png'
    end
  end
  
end
