Rails.application.routes.draw do
  root to: 'renters_rights#index'
  # reference: http://guides.rubyonrails.org/routing.html
  get '/about', to: 'renters_rights#about'
  get '/renters', to: 'renters_rights#renters'
  get '/eviction', to: 'renters_rights#eviction'
  get '/resources', to: 'renters_rights#resources'
  get '/rent-calculator', to: 'renters_rights#rent_calculator'
  get '/legal-aid', to: 'renters_rights#legal_aid'
  get '/shelter', to: 'renters_rights#shelter'
  get '/report-issue', to: 'renters_rights#report_issue'
  # get '/:locale', to: 'renters_rights#index'
  # get '/:locale/about', to: 'renters_rights#faq'
  # get '/:locale/renters', to: 'renters_rights#renters'
  # get '/:locale/eviction', to: 'renters_rights#eviction'
  # get '/:locale/resources', to: 'renters_rights#resources'
  # get '/:locale/rent-calculator', to: 'renters_rights#rent_calculator'
end
