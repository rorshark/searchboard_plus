require 'rails_helper'

RSpec.describe Customer, type: :model do
  it 'has a UUID primary key' do
    customer = create(:customer)

    expect(UUID.validate(customer.id)).to be true
  end

  it 'exposes first/last name' do
    customer = build(:customer, first_name: 'Dougy', last_name: 'Pauly')

    expect(customer.first_name).to eq('Dougy')
    expect(customer.last_name).to eq('Pauly')
  end
end
