require 'rails_helper'

RSpec.describe CompanyPresenter do
  describe 'present_all' do
    let(:companies) do
      [
        build(:company, company_name: 'New Relic'),
        build(:company, company_name: 'Pet Smart')
      ]
    end

    it 'returns a hash of company attributes' do
      result = CompanyPresenter.present_all(companies).fetch(:companies).map(&:as_json)

      expect(result).to eq(
        [
          { company_name: 'New Relic' },
          { company_name: 'Pet Smart' }
        ]
      )
    end
  end

  describe 'as_json' do
    let(:company) do
      build(:company, company_name: 'New Relic')
    end

    subject do
      CompanyPresenter.new(company)
    end

    it 'returns a hash of company attributes' do
      expect(subject.as_json).to eq({ company_name: company.company_name })
    end
  end
end
