import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { TextField } from '@material-ui/core'

const SearchInput: React.FC = () => {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <TextField
      label="Search" 
      variant="outlined"
      value={search}
      onChange={(evt) => setSearch(evt.target.value) }
      inputProps={{
        "data-testid": "search-input"
      }}
    />
  )
}

export default SearchInput
