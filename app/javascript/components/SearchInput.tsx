import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchInput: React.FC = () => {
  const { search, setSearch, fetchCustomers } = useContext(SearchContext)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      fetchCustomers()
    }
  }

  return (
    <label>
      Search
      <input 
        type="text" 
        name="search" 
        data-testid="search-input"
        value={search}
        onKeyDown={(evt) => handleKeyDown(evt)}
        onChange={(evt) => setSearch(evt.target.value) }
      />
    </label>
  )
}

export default SearchInput
