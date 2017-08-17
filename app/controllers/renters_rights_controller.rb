# frozen_string_literal: true

class RentersRightsController < ApplicationController
  layout "renters_rights"

  def index
  end

  def renters_post
    if params[:city].strip.upcase == "SAN JOSE"
      redirect_to '/renters-reasons'
    else
      redirect_to '/not-applicable'
    end
  end

  def not_applicable
  end

  def renters_type
  end

  def renters_type_post
    if params[:unpermitted] == "on" || params[:rentalType] == "apt3Plus" 
      redirect_to '/renters-reasons'
    else
      redirect_to '/evictions-resources'
    end
  end

  def renters_reasons
  end

  def renters_reasons_post
    if params[:gaveReason] == "yes" && params[:ownerMoveIn] == "on" || params[:ellisAct] == "on" || params[:orderToVacate] == "on" || params[:leavingUnpermittedUnit] == "on" || params[:rehabilitation] == "on"
      redirect_to '/tenant-relocation'
    elsif params[:gaveReason] == "yes" && params[:nonpayment] == "on" ||  params[:lease] == "on" || params[:damage] == "on" || params[:refulsalNew] == "on" || params[:nuisance] == "on" || params[:refusing] == "on" || params[:sublease] == "on"
      redirect_to '/eviction-resources'
    elsif params[:gaveReason] == "no"
      redirect_to '/tpo'
    end 
  end
  
  def tenant_relocation
  end

  def eviction_resources
  end

  def tpo_message
  end 

  def resources
  end 

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
