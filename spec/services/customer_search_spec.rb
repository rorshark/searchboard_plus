require 'rails_helper'

RSpec.describe CustomerSearch do
  before do
    create(
      :customer,
      first_name: 'Dougy',
      last_name: 'Pauly',
      company: create(:company, company_name: 'New Relic')
    )

    create(
      :customer,
      first_name: 'Mister',
      last_name: 'Bones',
      company: create(:company, company_name: 'Pet Smart')
    )
  end

  describe 'execute' do
    it 'searches by first name' do
      customers = CustomerSearch.execute(search_query: 'Dougy')

      expect(customers.size).to eq 1
      expect(customers.first.first_name).to eq('Dougy')
    end

    it 'searches by last name' do
      customers = CustomerSearch.execute(search_query: 'Pauly')

      expect(customers.size).to eq 1
      expect(customers.first.first_name).to eq('Dougy')
    end

    it 'includes name AND company_name (if present)' do
      customers = CustomerSearch.execute(search_query: 'Pauly', company_name: 'Pet Smart')

      expect(customers.size).to eq 0
    end

    it 'searches by company_name only' do
      customers = CustomerSearch.execute(company_name: 'Pet Smart')

      expect(customers.size).to eq 1
      expect(customers.first.first_name).to eq('Mister')
    end

    it 'defaults to all records' do
      customers = CustomerSearch.execute

      expect(customers.size).to eq 2
    end
  end
end
