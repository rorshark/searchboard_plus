import { renderHook } from '@testing-library/react-hooks'
import { mocked } from 'ts-jest/utils'
import { useSearch } from './useSearch'
import { fetchCustomers } from '../api/customers'

jest.mock('../api/customers')

const mockFetch = mocked(fetchCustomers)

test('it fetches customers on mount', async () => {
  const mockResponse = {
    customers: [{
      firstName: 'Dougy',
      lastName: 'Pauly'
    }]
  }

  mockFetch.mockResolvedValue(mockResponse)

  const { result, waitForNextUpdate } = renderHook(() => useSearch())

  await waitForNextUpdate()

  expect(result.current.customers).toEqual(mockResponse.customers)
  expect(result.current.error).toEqual(false)
  expect(result.current.loading).toEqual(false)
})
