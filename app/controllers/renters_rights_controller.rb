# frozen_string_literal: true

class RentersRightsController < ApplicationController
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

  def address_check
  end

  def address_check_post
    if params[:city].strip.upcase == "SAN JOSE" && params[:totalUnits]== "4+" && params[:yearBuilt] == "before"
      redirect_to '/renters-types'
    elsif params[:city].strip.upcase == "SAN JOSE" && params[:totalUnits]== "3" && params[:yearBuilt] == "before"
      redirect_to '/renters-ARO-TPO'
    elsif params[:city].strip.upcase == "SAN JOSE" && params[:totalUnits]== "2"
      redirect_to '/renters-duplex'
    elsif params[:city].strip.upcase != "SAN JOSE"
      redirect_to '/not-applicable'
    else
      redirect_to '/not-applicable'
    end
  end

  def renters_types
  end

  def renters_ARO_TPO
  end

  def renters_duplex
  end

  def not_applicable
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
