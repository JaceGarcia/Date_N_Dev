Rails.application.routes.draw do
  get "/api/users", to: "api/users#index"
  get "/api/users/:id", to: "api/users#show"
  delete "/api/users/:id", to: "api/users#destroy"
  root 'users#index'    
  mount_devise_token_auth_for 'User', at: 'auth'

  end