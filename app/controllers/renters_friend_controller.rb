# frozen_string_literal: true

class RentersFriendController < ApplicationController
  layout "renters_friend"

  def index
    @images = {
      twitter: path_to_asset('twitter_logo')
    }
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end 

end
