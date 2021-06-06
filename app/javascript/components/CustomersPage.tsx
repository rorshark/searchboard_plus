import React from 'react'
import { SearchProvider } from '../context/SearchContext'
import CustomersTable from './CustomersTable'

export type BootstrapProps = {
  search_query: string
}

export const CustomersPage: React.FC<BootstrapProps> = () => (
  <SearchProvider>
    <CustomersTable />
  </SearchProvider>
)

export default CustomersPage
