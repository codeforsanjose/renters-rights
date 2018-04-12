# frozen_string_literal: true

class RentersRightsController < ApplicationController
  include RentersRightsHelper
  layout "renters_rights"

  def index
  end

  def about
  end

  def eviction
  end

  def rent_increase
  end

  def report_issue
  end

  def find_jurisdiction
  end

  def resources
    @filter = params[:filter]
  end

  def rent_calculator
  end

  def legal_aid
  end

  def shelter
  end

  def housing_discrimination
  end

  def ellis_act_ordinance
  end

  def tenant_protection_ordinance
  end

  def apartment_rent_ordinance
  end

  def mobile_home_ordinance
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
