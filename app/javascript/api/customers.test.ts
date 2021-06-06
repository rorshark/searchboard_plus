import axios from 'axios'
import { mocked } from 'ts-jest/utils'
import { fetchCustomers } from './customers'

jest.mock('axios')

const mockGet = mocked(axios.get)

const mockResponse = {
  data: {
    customers: []
  }
}

test('it returns response data when the request is successful', async () => {
  mockGet.mockResolvedValue(mockResponse)

  const result = await fetchCustomers()

  expect(result).toEqual(mockResponse.data)
})
