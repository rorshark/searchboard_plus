Rails.application.routes.draw do
  root to: 'customers#index'

  namespace :api do
    get 'customers' => 'customers_api#index'
  end
end
