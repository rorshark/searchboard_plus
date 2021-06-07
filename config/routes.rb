Rails.application.routes.draw do
  root to: 'customers#index'

  namespace :api do
    get 'customers' => 'customers_api#index'
    get 'companies' => 'companies_api#index'
  end
end
