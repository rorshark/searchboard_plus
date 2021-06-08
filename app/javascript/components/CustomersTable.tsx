import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'

import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  withStyles,
} from '@material-ui/core'

const HeaderCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const CustomersTable: React.FC = () => {
  const { error, loading, customers, fetchCustomers } = useContext(SearchContext)

  useEffect(() => {
    fetchCustomers()
  }, [])

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
    <TableContainer component={Paper}>
      <Table data-testid="customers-table">
        <TableHead>
          <TableRow>
            <HeaderCell>First Name</HeaderCell>
            <HeaderCell>Last Name</HeaderCell>
            <HeaderCell>Company Name</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell>{customer.firstName}</TableCell>
              <TableCell>{customer.lastName}</TableCell>
              <TableCell>{customer.company?.companyName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomersTable
