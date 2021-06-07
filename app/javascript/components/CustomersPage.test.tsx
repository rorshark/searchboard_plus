import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchContext } from '../context/SearchContext'
import { CustomersPage } from './CustomersPage'
import { searchApi } from '../factories/search'

test('it renders the customers page', () => {
  render(
    <SearchContext.Provider value={searchApi.build()}>
      <CustomersPage />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('customers-page')

  expect(element).toMatchSnapshot()
})
