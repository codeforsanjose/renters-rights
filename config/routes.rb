Rails.application.routes.draw do
  root 'renters_rights#index'
  # reference: http://guides.rubyonrails.org/routing.html

  get 'not-applicable', to: 'renters_rights#not_applicable'
end
