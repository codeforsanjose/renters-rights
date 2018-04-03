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

  def address_type
  end

  def address_check_post
    puts "city :" +  params[:city]
    if params[:city].strip.upcase == "SAN JOSE"
        redirect_to '/address-type'
    else
      redirect_to '/not-applicable'
    end
  end

  def address_type_post
    puts "city :" +  params[:totalUnits]
    puts "city :" +  params[:yearBuilt]
    puts "**********************************"
    puts "city :" +  params[:fourOrMore]
    puts "city :" +  params[:before1979]
    puts "city :" +  params[:threeUnits]
    puts "city :" +  params[:twoUnits]
    puts "city :" +  params[:after1979]
    if params[:fourOrMore] == "on" && params[:yearBuilt] == "yes"
        redirect_to '/renters-types'
    elsif params[:threeUnits] == "on" && params[:yearBuilt] == "no"
        redirect_to '/renters-types-2'
    elsif params[:twoUnits]== "on"
        redirect_to '/renters-duplex'
    else
      redirect_to '/not-applicable'
    end
  end


  def renters_types
  end

  def renters_types_2
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
