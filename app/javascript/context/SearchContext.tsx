import React from 'react'
import { useSearch, SearchAPI, SearchParams } from '../hooks/useSearch'

export const DEFAULT_SEARCH_API: SearchAPI = {
  error: false,
  loading: true,
  customers: [],
  search: '',
  setSearch: (_) => {},
  companies: [],
  selectedCompany: '',
  setSelectedCompany: (_) => {},
  fetchCustomers: async () => {},
  fetchCompanies: async () => {}
}

export const SearchContext: React.Context<SearchAPI> = React.createContext(DEFAULT_SEARCH_API)

export const SearchProvider: React.FC<{
  initialSearchParams: SearchParams
}> = ({ initialSearchParams, children }) => {
  const search = useSearch(initialSearchParams)

  return (
    <SearchContext.Provider value={search}>
      {children}
    </SearchContext.Provider>
  )
}
