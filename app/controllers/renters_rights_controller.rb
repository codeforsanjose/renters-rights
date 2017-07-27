# frozen_string_literal: true

class RentersRightsController < ApplicationController
  layout "renters_rights"

  def index
  #  @images = {
  #    twitter: path_to_asset('twitter_logo')
  #  }
  end

  def not_applicable
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
