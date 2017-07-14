Rails.application.routes.draw do
  root 'renters_friend#index'
  # reference: http://guides.rubyonrails.org/routing.html 

  get 'not-applicable', to: 'renters_friend#not_applicable'
end
