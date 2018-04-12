Rails.application.routes.draw do
  root to: 'renters_rights#index'
  # reference: http://guides.rubyonrails.org/routing.html
  get '/about', to: 'renters_rights#about'
  get '/eviction', to: 'renters_rights#eviction'
  get '/resources/:filter', to: 'renters_rights#resources'
  get '/rent-calculator', to: 'renters_rights#rent_calculator'
  get '/legal-aid', to: 'renters_rights#legal_aid'
  get '/shelter', to: 'renters_rights#shelter'
  get '/report-issue', to: 'renters_rights#report_issue'
  get '/find-jurisdiction', to: 'renters_rights#find_jurisdiction'
  get '/rent-increase', to: 'renters_rights#rent_increase'
  get '/housing-discrimination', to: 'renters_rights#housing_discrimination'
  get '/ellis-act-ordinance', to: 'renters_rights#ellis_act_ordinance'
  get '/tenant-protection-ordinance', to: 'renters_rights#tenant_protection_ordinance'
  get '/apartment-rent-ordinance', to: 'renters_rights#apartment_rent_ordinance'
  get '/mobile-home-ordinance', to: 'renters_rights#mobile_home_ordinance'
end
