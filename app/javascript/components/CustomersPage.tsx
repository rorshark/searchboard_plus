import React from 'react'
import { SearchProvider } from '../context/SearchContext'
import SearchInput from './SearchInput'
import CompanySelect from './CompanySelect'
import SubmitButton from './SubmitButton'
import CustomersTable from './CustomersTable'
import { SearchParams } from '../hooks/useSearch'

export const CustomersPage: React.FC<SearchParams> = (props) => {
  return (
    <SearchProvider initialSearchParams={props}>
      <div>
        <SearchInput />
        <CompanySelect />
        <SubmitButton />
      </div>
      <div>
        <CustomersTable />
      </div>
    </SearchProvider>
  )
}

export default CustomersPage
