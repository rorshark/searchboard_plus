import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomersPage from './CustomersPage'
import { searchParams } from '../factories/search'

test('it renders the customers page', () => {
  render(<CustomersPage {...searchParams.build()} />)

  const element = screen.getByTestId('loading')

  expect(element).toMatchSnapshot()
})
