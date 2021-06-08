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

test('it calls setSearch', () => {
  const setSearch = jest.fn()

  const context = searchApi.build({
    search: 'Dougy Pauly',
    setSearch
  })

  render(
    <SearchContext.Provider value={context}>
      <SearchInput />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('search-input')

  fireEvent.change(element, { target: { value: 'Test' } })

  expect(setSearch.mock.calls[0][0]).toEqual('Test')
})
