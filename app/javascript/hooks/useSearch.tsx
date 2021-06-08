import { useState, useEffect, useCallback } from 'react'
import { Customer } from '../types/customers'
import { Company } from '../types/companies'
import { pushParams } from '../utils/url'
import * as customersApi from '../api/customers'
import * as companiesApi from '../api/companies'

export const ALL_COMPANIES = '_ALL_'

export type SearchAPI = {
  error: boolean
  loading: boolean
  customers: Customer[],
  search: string
  setSearch: (q: string) => void
  companies: Company[]
  selectedCompany: string
  setSelectedCompany: (c: string) => void
  fetchCustomers: () => Promise<void>
  fetchCompanies: () => Promise<void>
}

export type SearchParams = {
  search: string
  filter_by_company_name: string
}

export const useSearch = (params: SearchParams): SearchAPI => {
  const initialSearch = params.search || ''
  const initialCompany = params.filter_by_company_name || ''

  const [search, setSearch] = useState(initialSearch)
  const [selectedCompany, setSelectedCompany] = useState(initialCompany)
  const [companies, setCompanies] = useState([])
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

  const fetchCompanies = useCallback(async () => {
    try {
      const { companies } = await companiesApi.fetchCompanies()
      setCompanies(companies)
    } catch {
      setCompanies([])
    }
  }, [])

  useEffect(() => {
    const companyName = selectedCompany === ALL_COMPANIES ? '' : selectedCompany

    setSearchParams({
      search,
      filter_by_company_name: companyName
    })
  }, [search, selectedCompany])

  useEffect(() => {
    fetchCustomers()
  }, [searchParams])

  return {
    error,
    loading,
    customers,
    search,
    setSearch,
    companies,
    selectedCompany,
    setSelectedCompany,
    fetchCustomers,
    fetchCompanies
  }
}
