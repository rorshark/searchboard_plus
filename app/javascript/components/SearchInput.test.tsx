import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchContext } from '../context/SearchContext'
import { searchApi } from '../factories/search'
import SearchInput from './SearchInput'

test('it renders a text input', () => {
  const context = searchApi.build()

  render(
    <SearchContext.Provider value={context}>
      <SearchInput />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('search-input')

  expect(element).toMatchSnapshot()
})

test('it populates the input field', () => {
  const context = searchApi.build({
    search: 'Dougy Pauly'
  })

  render(
    <SearchContext.Provider value={context}>
      <SearchInput />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('search-input')

  expect(element).toMatchSnapshot()
})

test('it fetches customers when the enter key is pressed', () => {
  const fetchCustomers = jest.fn()

  const context = searchApi.build({
    search: 'Dougy Pauly',
    fetchCustomers
  })

  render(
    <SearchContext.Provider value={context}>
      <SearchInput />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('search-input')

  fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' })

  expect(fetchCustomers).toHaveBeenCalled()
})
