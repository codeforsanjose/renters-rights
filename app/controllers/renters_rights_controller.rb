# frozen_string_literal: true

class RentersRightsController < ApplicationController
  layout "renters_rights"

  def index
  end

  def eviction
  end

  def renters
  end

  def resources
  end

  def rent_calculator
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
