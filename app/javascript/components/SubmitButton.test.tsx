import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchContext } from '../context/SearchContext'
import { searchApi } from '../factories/search'
import SubmitButton from './SubmitButton'

test('it renders a submit button', () => {
  const context = searchApi.build()

  render(
    <SearchContext.Provider value={context}>
      <SubmitButton />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('submit-button')

  expect(element).toMatchSnapshot()
})

test('it fetches customers when clicked', () => {
  const fetchCustomers = jest.fn()

  const context = searchApi.build({
    fetchCustomers
  })

  render(
    <SearchContext.Provider value={context}>
      <SubmitButton />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('submit-button')

  fireEvent.click(element)

  expect(fetchCustomers).toHaveBeenCalled()
})
