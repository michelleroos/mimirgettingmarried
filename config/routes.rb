# == Route Map
#
#      Prefix Verb   URI Pattern              Controller#Action
#        root GET    /                        static_pages#root
# api_session DELETE /api/session(.:format)   api/sessions#destroy {:format=>:json}
#             POST   /api/session(.:format)   api/sessions#create {:format=>:json}
#   api_users POST   /api/users(.:format)     api/users#create {:format=>:json}
#    api_user GET    /api/users/:id(.:format) api/users#show {:format=>:json}
#             PATCH  /api/users/:id(.:format) api/users#update {:format=>:json}
#             PUT    /api/users/:id(.:format) api/users#update {:format=>:json}
#   api_rsvps POST   /api/rsvps(.:format)     api/rsvps#create {:format=>:json}
#    api_rsvp GET    /api/rsvps/:id(.:format) api/rsvps#show {:format=>:json}
#             PATCH  /api/rsvps/:id(.:format) api/rsvps#update {:format=>:json}
#             PUT    /api/rsvps/:id(.:format) api/rsvps#update {:format=>:json}

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :rsvps, only: [:create, :show, :update]
  end
end
