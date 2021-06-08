class CustomerSearch
  def self.execute(limit: 25, search_query: '', company_name: '', **)
    q = Customer.includes(:company)
    q = q.search_name(search_query) unless search_query.blank?
    q = q.where(company: { company_name: company_name }) unless company_name.blank?
    q.limit(limit)
  end
end
