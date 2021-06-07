import React from 'react'
import { FormControl, makeStyles } from '@material-ui/core'
import SearchInput from './SearchInput'
import CompanySelect from './CompanySelect'
import SubmitButton from './SubmitButton'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  }
}))

const SearchForm: React.FC = () => {
  const classes = useStyles()

  return (
    <div data-testid="search-form">
      <FormControl className={classes.formControl}>
        <SearchInput />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <CompanySelect />
      </FormControl>
      <FormControl className={classes.formControl}>
        <SubmitButton />
      </FormControl>
    </div>
  )
}

export default SearchForm
