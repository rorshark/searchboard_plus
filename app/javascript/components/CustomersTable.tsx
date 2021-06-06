import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const CustomersTable: React.FC = () => {
  const { error, loading, customers } = useContext(SearchContext)

  if (error) return (
    <div data-testid="error">
      Oops, something went wrong.
    </div>
  )

  if (loading) return (
    <div data-testid="loading">
      Loading...
    </div>
  )

  return (
    <table data-testid="customers-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.company?.companyName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomersTable
