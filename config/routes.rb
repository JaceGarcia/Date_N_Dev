Rails.application.routes.draw do
  get "/api/users", to: "api/users#index"
  get "/api/users/:id", to: "api/users#show"
  delete "/api/users/:id", to: "api/users#destroy"
  patch "/api/users/:id/edit", to: "api/users#edit"
  post "/api/swipes/new", to: "api/swipes#create"
  get "/api/swipes", to: "api/swipes#index"
  root 'users#index'    
  mount_devise_token_auth_for 'User', at: 'auth'
    

  end