import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomersTable from './CustomersTable'
import { SearchContext } from '../context/SearchContext'
import { customer } from '../factories/customers'

test('it renders a loading screen', () => {
  const search = {
    error: false,
    loading: true,
    customers: []
  }

  render(
    <SearchContext.Provider value={search}>
      <CustomersTable />
    </SearchContext.Provider>
  )

  const loading = screen.getByTestId('loading')
  const error = screen.queryByTestId('error')
  const table = screen.queryByTestId('customers-table')

  expect(loading).toMatchSnapshot()
  expect(error).toBeNull()
  expect(table).toBeNull()
})

test('it renders an error screen', () => {
  const search = {
    error: true,
    loading: false,
    customers: []
  }

  render(
    <SearchContext.Provider value={search}>
      <CustomersTable />
    </SearchContext.Provider>
  )

  const error = screen.getByTestId('error')
  const loading = screen.queryByTestId('loading')
  const table = screen.queryByTestId('customers-table')

  expect(error).toMatchSnapshot()
  expect(loading).toBeNull()
  expect(table).toBeNull()
})

test('it renders the customers table when loaded', async () => {
  const search = {
    error: false,
    loading: false,
    customers: customer.buildList(1, { 
      firstName: 'Dougy', 
      lastName: 'Pauly', 
      company: { 
        companyName: 'New Relic' 
      } 
    })
  }

  render(
    <SearchContext.Provider value={search}>
      <CustomersTable />
    </SearchContext.Provider>
  )

  const table = screen.getByTestId('customers-table')
  const error = screen.queryByTestId('error')
  const loading = screen.queryByTestId('loading')

  expect(table).toMatchSnapshot()
  expect(error).toBeNull()
  expect(loading).toBeNull()
})
