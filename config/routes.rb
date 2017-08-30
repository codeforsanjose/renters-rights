Rails.application.routes.draw do
  root 'renters_rights#index'
  # reference: http://guides.rubyonrails.org/routing.html
  get '/faq', to: 'renters_rights#faq'
  get '/renters', to: 'renters_rights#renters'
  get '/eviction', to: 'renters_rights#eviction'
  get '/resources', to: 'renters_rights#resources'
end
