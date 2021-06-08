class CustomersController < ApplicationController
  def index
    render component: 'CustomersPage', props: {
      search: search_query,
      filter_by_company_name: filter_by_company_name
    }
  end

  private

  def search_query
    search_params[:search]
  end

  def filter_by_company_name
    search_params[:filter_by_company_name]
  end

  def search_params
    params.permit(:search, :filter_by_company_name)
  end
end
