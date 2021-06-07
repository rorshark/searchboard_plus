import { renderHook, act } from '@testing-library/react-hooks'
import { mocked } from 'ts-jest/utils'
import { useSearch } from './useSearch'
import { fetchCustomers } from '../api/customers'
import { customer } from '../factories/customers'
import { searchParams } from '../factories/search'

jest.mock('../api/customers')

const mockFetch = mocked(fetchCustomers)

test('it fetches customers successfully', async () => {
  const mockResponse = {
    customers: customer.buildList(1)
  }

  mockFetch.mockResolvedValue(mockResponse)

  const { result } = renderHook(() => useSearch(searchParams.build()))

  await act(async () => {
    result.current.fetchCustomers()
  })

  expect(result.current.customers).toEqual(mockResponse.customers)
  expect(result.current.error).toEqual(false)
  expect(result.current.loading).toEqual(false)
})

test('it handles failure', async () => {
  mockFetch.mockRejectedValue(new Error(`Boom`))

  const { result } = renderHook(() => useSearch(searchParams.build()))

  await act(async () => {
    result.current.fetchCustomers()
  })

  expect(result.current.error).toEqual(true)
  expect(result.current.loading).toEqual(false)
})
