import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomersTable from './CustomersTable'
import { SearchContext } from '../context/SearchContext'

test('it renders a loading screen', () => {
  const search = {
    loading: true,
    customers: [],
    error: false
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
    loading: false,
    customers: [],
    error: true
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
    loading: false,
    customers: [{ firstName: 'Dougy', lastName: 'Pauly' }],
    error: false
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
