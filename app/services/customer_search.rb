class CustomerSearch
  def self.execute(limit: 25, search_query: nil, company_name: nil, **)
    q = Customer.includes(:company)
    q = q.where(first_name: search_query) unless search_query.blank?
    q = q.where(company: { company_name: company_name }) unless company_name.blank?
    q.limit(limit)
  end
end
