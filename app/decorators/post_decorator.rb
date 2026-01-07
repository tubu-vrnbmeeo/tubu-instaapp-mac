# frozen_string_literal: true

module PostDecorator
  def updated_time
    time_diff_second = Time.now - self.created_at
    if time_diff_second >= 24 * 60 * 60
      I18n.l(self.created_at, format: :long)
    elsif time_diff_second >= 2 * 60 * 60
      "#{(time_diff_second / 60 / 60).floor} hours ago"
    elsif time_diff_second >= 60
      "#{(time_diff_second / 60).floor} minutes ago"
    else
      "#{time_diff_second.floor} seconds ago"
    end
  end
end
