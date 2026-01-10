# frozen_string_literal: true

require 'spec_helper'

RSpec.describe PostDecorator do
  let(:post) { Post.new.extend PostDecorator }
  subject { post }
  it { should be_a Post }
end
