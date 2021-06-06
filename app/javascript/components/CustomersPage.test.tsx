import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomersPage from './CustomersPage'

test('it renders the customers page', () => {
  render(<CustomersPage search_query="" />)

  const element = screen.getByTestId('loading')

  expect(element).toMatchSnapshot()
})
