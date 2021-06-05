require 'rails_helper'

RSpec.describe Api::CustomersApiController, type: :controller do
  it 'returns a 200' do
    get :index
    expect(response).to have_http_status(:ok)
  end

  it 'returns a list of customers' do
    get :index
    expect(response).to match_response_schema(:customers_response)
  end
end
