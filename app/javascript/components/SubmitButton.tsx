import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { Button } from '@material-ui/core'

const SubmitButton: React.FC = () => {
  const { fetchCustomers } = useContext(SearchContext)

  return (
    <Button 
      type="submit" 
      color="primary"
      variant="contained"
      data-testid="submit-button" 
      onClick={() => fetchCustomers()}>
      Search
    </Button>
  )
}

export default SubmitButton
