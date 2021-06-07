require 'rails_helper'

RSpec.describe CustomerPresenter do
  describe 'present_all' do
    let!(:customers) do
      [
        create(
          :customer,
          first_name: 'Dougy',
          last_name: 'Pauly',
          company: create(:company, company_name: 'New Relic')
        )
      ]
    end

    it 'returns a hash of customer attributes' do
      result = CustomerPresenter.present_all(customers).fetch(:customers).map do |it|
        JSON.parse(it.to_json).deep_symbolize_keys
      end

      expect(result).to eq(
        [
          {
            first_name: 'Dougy',
            last_name: 'Pauly',
            company: {
              company_name: 'New Relic'
            }
          }
        ]
      )
    end
  end

  describe 'as_json' do
    let!(:customer) do
      create(
        :customer,
        first_name: 'Dougy',
        last_name: 'Pauly',
        company: create(:company, company_name: 'New Relic')
      )
    end

    subject do
      CustomerPresenter.new(customer)
    end

    it 'returns a hash of company attributes' do
      expect(JSON.parse(subject.to_json).deep_symbolize_keys).to eq(
        {
          first_name: 'Dougy',
          last_name: 'Pauly',
          company: {
            company_name: 'New Relic'
          }
        }
      )
    end
  end
end
