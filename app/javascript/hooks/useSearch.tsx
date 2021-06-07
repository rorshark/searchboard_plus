import { useState, useEffect, useCallback } from 'react'
import { Customer } from '../types/customers'
import { Company } from '../types/companies'
import { pushParams } from '../utils/url'
import * as customersApi from '../api/customers'

export type SearchAPI = {
  error: boolean
  loading: boolean
  customers: Customer[],
  search: string
  setSearch: (q: string) => void
  companies: Company[]
  selectedCompany?: string
  setSelectedCompany: (c: string) => void
  fetchCustomers: () => Promise<void>
}

export type SearchParams = {
  search?: string
  filter_by_company_name?: string
}

const mockCompanies = [
  { companyName: 'Hettinger and Sons' },
  { companyName: 'Fritsch-Parker' },
  { companyName: 'Grimes Inc' }
]

export const useSearch = (params: SearchParams): SearchAPI => {
  const [search, setSearch] = useState(params.search)
  const [selectedCompany, setSelectedCompany] = useState(params.filter_by_company_name)
  const [companies] = useState(mockCompanies)
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchParams, setSearchParams] = useState(params)

  const fetchCustomers = useCallback(async () => {
    pushParams(searchParams)

    try {
      const { customers } = await customersApi.fetchCustomers(searchParams)
      setLoading(false)
      setCustomers(customers)
      setError(false)
    } catch {
      setLoading(false)
      setError(true)
    }
  }, [searchParams, setCustomers, setLoading, setError])

  useEffect(() => {
    setSearchParams({
      search,
      filter_by_company_name: selectedCompany
    })
  }, [search, selectedCompany])

  return {
    error,
    loading,
    customers,
    search,
    setSearch,
    companies,
    selectedCompany,
    setSelectedCompany,
    fetchCustomers
  }
}
