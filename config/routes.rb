Rails.application.routes.draw do
  root 'renters_rights#index'
  # reference: http://guides.rubyonrails.org/routing.html

  get 'not-applicable', to: 'renters_rights#not_applicable'
  get 'renters-reasons-form', to: 'renters_rights#renters_reasons_form'
  get 'tenant-reallocation', to: 'renters_rights#tenant_reallocation'
  get 'eviction-resources', to: 'renters_rights#eviction_resources'
end
