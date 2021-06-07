import { renderHook, act } from '@testing-library/react-hooks'
import { mocked } from 'ts-jest/utils'
import { useSearch } from './useSearch'
import { fetchCustomers } from '../api/customers'
import { fetchCompanies } from '../api/companies'
import { customer } from '../factories/customers'
import { company } from '../factories/companies'
import { searchParams } from '../factories/search'

jest.mock('../api/customers')
jest.mock('../api/companies')

const mockFetchCustomers = mocked(fetchCustomers)
const mockFetchCompanies = mocked(fetchCompanies)

describe('fetchCustomers', () => {
  test('it fetches customers successfully', async () => {
    const mockResponse = {
      customers: customer.buildList(1)
    }

    mockFetchCustomers.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useSearch(searchParams.build()))

    await act(async () => {
      result.current.fetchCustomers()
    })

    expect(result.current.customers).toEqual(mockResponse.customers)
    expect(result.current.error).toEqual(false)
    expect(result.current.loading).toEqual(false)
  })

  test('it handles failure', async () => {
    mockFetchCustomers.mockRejectedValue(new Error(`Boom`))

    const { result } = renderHook(() => useSearch(searchParams.build()))

    await act(async () => {
      result.current.fetchCustomers()
    })

    expect(result.current.error).toEqual(true)
    expect(result.current.loading).toEqual(false)
  })
})

describe('fetchCompanies', () => {
  test('it fetches companies successfully', async () => {
    const mockResponse = {
      companies: company.buildList(1)
    }

    mockFetchCompanies.mockResolvedValue(mockResponse)

    const { result } = renderHook(() => useSearch(searchParams.build()))

    await act(async () => {
      result.current.fetchCompanies()
    })

    expect(result.current.companies).toEqual(mockResponse.companies)
  })

  test('it handles failure', async () => {
    mockFetchCompanies.mockRejectedValue(new Error(`Boom`))

    const { result } = renderHook(() => useSearch(searchParams.build()))

    await act(async () => {
      result.current.fetchCompanies()
    })

    expect(result.current.companies).toEqual([])
  })
})
