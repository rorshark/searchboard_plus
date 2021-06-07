import React from 'react'
import { useSearch, SearchAPI, SearchParams } from '../hooks/useSearch'

export const defaultSearchApi: SearchAPI = {
  error: false,
  loading: true,
  customers: [],
  search: '',
  setSearch: (_) => {},
  companies: [],
  selectedCompany: null,
  setSelectedCompany: (_) => {},
  fetchCustomers: async () => {}
}

export const SearchContext: React.Context<SearchAPI> = React.createContext(defaultSearchApi)

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
