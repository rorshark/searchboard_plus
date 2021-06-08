module Api
  class CustomersApiController < ApiController
    def index
      customers = CustomerSearch.execute(
        search_query: search_query,
        company_name: company_name
      )

      render json: CustomerPresenter.present_all(customers)
    end

    private

    def search_query
      search_params[:search]
    end

    def company_name
      search_params[:filter_by_company_name]
    end

    def search_params
      params.permit(:search, :filter_by_company_name, :format)
    end
  end
end
