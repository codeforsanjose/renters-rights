Rails.application.routes.draw do
  root to: redirect('/en')
  # reference: http://guides.rubyonrails.org/routing.html
  get '/rent-calculator', to: 'renters_rights#rent_calculator'
  get '/:locale', to: 'renters_rights#index'
  get '/:locale/faq', to: 'renters_rights#faq'
  get '/:locale/renters', to: 'renters_rights#renters'
  get '/:locale/eviction', to: 'renters_rights#eviction'
  get '/:locale/resources', to: 'renters_rights#resources'
end
