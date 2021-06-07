class CustomerPresenter
  def self.present_all(customers)
    { customers: customers.map(&method(:new)) }
  end

  def initialize(customer)
    @customer = customer
  end

  attr_reader :customer

  delegate :first_name, :last_name, to: :customer

  def company
    CompanyPresenter.new(customer.company) if customer.company.present?
  end

  def as_json(_options = nil)
    {
      first_name: first_name,
      last_name: last_name,
      company: company
    }.compact
  end
end
