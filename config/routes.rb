Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :index] 
    resource :session, only:[:create, :destroy]
    resources :posts
    resources :comments, only:[:create, :destroy]
    resources :likes, only:[:create, :destroy]
    get "/users/search/:query", to: "users#index"

  end


  
end
