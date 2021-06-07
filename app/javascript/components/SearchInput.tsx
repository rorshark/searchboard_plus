import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { TextField } from '@material-ui/core'

const SearchInput: React.FC = () => {
  const { search, setSearch, fetchCustomers } = useContext(SearchContext)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      fetchCustomers()
    }
  }

  return (
    <TextField
      label="Search" 
      variant="outlined"
      value={search}
      onKeyDown={(evt) => handleKeyDown(evt)}
      onChange={(evt) => setSearch(evt.target.value) }
      inputProps={{
        "data-testid": "search-input"
      }}
    />
  )
}

export default SearchInput
