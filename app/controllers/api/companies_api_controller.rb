module Api
  class CompaniesApiController < ApiController
    def index
      companies = Company.order(company_name: :asc)

      render json: CompanyPresenter.present_all(companies)
    end
  end
end
