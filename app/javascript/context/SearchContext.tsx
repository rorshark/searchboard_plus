import React from 'react'
import { useSearch, SearchAPI } from '../hooks/useSearch'

export const SearchContext: React.Context<SearchAPI> = React.createContext({
  error: false,
  loading: true,
  customers: []
})

export const SearchProvider: React.FC = ({ children }) => {
  const search = useSearch()

  return (
    <SearchContext.Provider value={search}>
      {children}
    </SearchContext.Provider>
  )
}
