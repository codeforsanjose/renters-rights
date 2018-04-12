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

  def address_check
  end

  def address_type
  end

  def address_check_post
    puts "city :" +  params[:city]
    puts "Address: " + params[:street]
    puts "Apt: + params[:apt]"
    address = params[:street] + "Apt" + params[:apt]
    citystatezip=params[:city]+"%2C"+params[:state]
    puts "citystatezip" + citystatezip

    info=getInfo(address,citystatezip)
    # [type,useCode,yearBuilt, street]
    if params[:city].strip.upcase == "SAN JOSE" && params[:street] == info[3]
      case info[0] # type
        when "neighborhood" # when the property is a part of incorporated City of San Jose neighborhood
          if info[2]<=1979 #if the property is built before (or the year of 1979).
            # Note that we don't get specific details if the property ws built before September 7, 1979
              case info[1] # useCode
                when "MultiFamily5Plus" # applies to ARO, TPO and EAO
                  renters_policies_EAOTPOARO # redirect_to '/renters-policies-EAOTPOARO'
                when "Triplex" # applies to ARO and TPO
                  renters_policies_EAOTPOARO #redirect_to '/renters-policies-TPOARO'
                when "MultiFamily2To4"
                  # display ASK FORM
                  address_type #redirect_to '/address-type'
                when "Condominium"
                  address_type
                when "Apartment"
                  address_type
                when "Unknown"
                  address_type
                when "SingleFamily"
                  address_type
                when "Quadruplex"
                  address_type
                when "Cooperative"
                  address_type
                when "Timeshare"
                  address_type
                when "Miscellaneous"  # clarify number of units
                  address_type
                when "Mobile"
                  # Mobile Home Ordinance
                  renters_policies_MHO #redirect_to '/renters-policies-MHO'
              end # ending case

            elsif info[2]>1979 # if property was built after 1979
              renters_policies_general #redirect_to '/renters-policies-general'
            elsif !info[2] # if the yearBuilt doesn't exist for the response. 
              # Later possible TODO - if this condition is true, then search query within spreadsheet of rent stabilized apartments from City of SJ
              renters_policies_general #redirect_to '/renters-policies-general'
            end #ending if statement
        when "city" # when the property is a part of unincorporated Santa Clara County
          renters_policies_general_SCC #redirect_to '/renters-policies-general-SCC'
      end #ending case
    else # when property is outside of San Jose, not returning the same address that was inputted, or possibly not covered by San Jose's rent stabilization policies
      renters_policies_general #redirect_to '/renters-policies-general'
    end #ending if
  end #ending method

  def address_type_post
    puts "totalUnits :" +  params[:totalUnits]
    puts "typeOfHome :" +  params[:typeOfHome]
    # puts "yearBuilt :" + params[:yearBuilt]
    if  params[:totalUnits] == "fourOrMore" # applies to EAO, ARO and TPO
      renters_policies_EAOTPOARO #redirect_to '/renters-policies-EAOTPOARO'
    elsif params[:totalUnits] == "threeUnits"
      renters_policies_EAOTPOARO #redirect_to '/renters-policies-TPOARO' # applies to TPO and ARO
    elsif params[:totalUnits] == "twoUnits" # duplexes are not covered by San Jose policies ARO, EAO, TPO or MHO
      renters_policies_general #redirect_to '/renters-policies-general'
    elsif params[:typeOfHome] == "guestRoom" && params[:totalUnits] == "threeUnits" || params[:totalUnits] == "fourUnits" || params[:totalUnits] == "oneUnit"
      renters_policies_TPO #redirect_to '/renters-policies-TPO'
    elsif params[:typeOfHome] == "guestHouse" && params[:totalUnits] == "threeUnits" || params[:totalUnits] == "fourUnits" || params[:totalUnits] == "oneUnit"
      renters_policies_TPO #redirect_to '/renters-policies-TPO'
    elsif params[:typeOfHome] == "unpermittedUnit" && params[:totalUnits] == "threeUnits" || params[:totalUnits] == "fourUnits" || params[:totalUnits] == "oneUnit"
      renters_policies_TPO #redirect_to '/renters-policies-TPO'
    else
      renters_policies_general #redirect_to '/renters-policies-general'
    end
  end

  def renters_policies_MHO
  end

  def renters_policies_general
  end

  def renters_policies_TPO
  end

  def renters_policies_TPOARO
  end

  def renters_policies_EAOTPOARO
  end

  def renters_polciies_general_SCC
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
