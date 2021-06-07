import React from 'react'
import { Typography } from '@material-ui/core'
import { SearchProvider } from '../context/SearchContext'
import { SearchParams } from '../hooks/useSearch'
import SearchForm from './SearchForm'
import CustomersTable from './CustomersTable'

export const CustomersPage: React.FC = () => {
  return (
    <div data-testid="customers-page">
      <Typography variant="h4">
        Customer Search
      </Typography>
      <SearchForm />
      <CustomersTable />
    </div>
  )
}

export default (props: SearchParams) => (
  <SearchProvider initialSearchParams={props}>
    <CustomersPage />
  </SearchProvider>
)
