import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SubmitButton: React.FC = () => {
  const { fetchCustomers } = useContext(SearchContext)

  return (
    <button type="submit" data-testid="submit-button" onClick={() => fetchCustomers()}>
      Submit
    </button>
  )
}

export default SubmitButton
