require 'rails_helper'

RSpec.describe Api::CompaniesApiController, type: :controller do
  it 'returns a 200' do
    get :index

    expect(response).to have_http_status(:ok)
  end

  it 'returns a list of customers' do
    companies = 2.times.map { build(:company) }

    allow(Company).to(receive(:order)).and_return(companies)

    get :index

    expect(response).to match_response_schema(:companies_response)
  end
end
