class CompanyPresenter
  def self.present_all(companies)
    { companies: companies.map(&method(:new)) }
  end

  def initialize(company)
    @company = company
  end

  attr_reader :company

  delegate :company_name, to: :company

  def as_json(_options = nil)
    {
      company_name: company_name
    }.compact
  end
end
