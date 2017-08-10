# frozen_string_literal: true

class RentersRightsController < ApplicationController
  layout "renters_rights"

  def index
  end

  def renters_post
    if params[:city].strip.upcase == "SAN JOSE"
      redirect_to '/help-type'
    else
      redirect_to '/not-applicable'
    end
  end

  def not_applicable
  end

  def help_type
  end

  def help_type_post
    if params[:evict] == "on"
      redirect_to '/renters-reasons'
    else
      redirect_to '/not-applicable'
    end
  end

  def renters_reasons
  end

  def renters_reasons_post
    if params[:gavereason] == "yes" && params[:ownermovein] == "on"
      redirect_to '/tenant-reallocation'
    else
      redirect_to '/eviction-resources'
    end
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
