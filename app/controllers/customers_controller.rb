class CustomersController < ApplicationController
  def index
    render component: 'CustomersPage', props: { search_query: search_query }
  end

  private

  def search_query
    params.permit(:search)[:search] || ''
  end
end
