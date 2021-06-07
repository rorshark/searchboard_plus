import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchContext } from '../context/SearchContext'
import SearchForm from './SearchForm'
import { searchApi } from '../factories/search'

test('it renders the customers page', () => {
  render(
    <SearchContext.Provider value={searchApi.build()}>
      <SearchForm />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('search-form')

  expect(element).toMatchSnapshot()
})
