class CustomerSearch
  def self.execute(limit: 25, search_query: '', company_name: '', **)
    q = Customer.includes(:company)

    unless search_query.blank?
      q = q.where(first_name: search_query).or(q.where(last_name: search_query))
    end

    unless company_name.blank?
      q = q.where(company: { company_name: company_name })
    end

    q.limit(limit)
  end
end
