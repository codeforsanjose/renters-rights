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

  def renters_reasons_form
  end

  def tenant_reallocation
  end

  def eviction_resources
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
