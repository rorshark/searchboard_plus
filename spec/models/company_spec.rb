require 'rails_helper'

RSpec.describe Company, type: :model do
  it 'has a UUID primary key' do
    company = create(:company)

    expect(UUID.validate(company.id)).to be true
  end

  it 'exposes company_name' do
    company = build(:company, company_name: 'New Relic')

    expect(company.company_name).to eq('New Relic')
  end
end
