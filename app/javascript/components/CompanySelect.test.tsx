import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchContext } from '../context/SearchContext'
import { company } from '../factories/companies'
import { searchApi } from '../factories/search'
import CompanySelect from './CompanySelect'

test('it renders a dropdown list of companies', () => {
  const context = searchApi.build({
    companies: company.buildList(1, {
      companyName: 'New Relic'
    })
  })

  render(
    <SearchContext.Provider value={context}>
      <CompanySelect />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('company-select')

  expect(element).toMatchSnapshot()
})

test('selecting a company', () => {
  const setSelectedCompany = jest.fn()

  const context = searchApi.build({
    setSelectedCompany,
    companies: company.buildList(1, {
      companyName: 'New Relic'
    })
  })

  render(
    <SearchContext.Provider value={context}>
      <CompanySelect />
    </SearchContext.Provider>
  )

  const element = screen.getByTestId('company-select')

  fireEvent.change(element, { target: { value: 'New Relic' } })

  expect(setSelectedCompany.mock.calls[0][0]).toEqual('New Relic')
})
