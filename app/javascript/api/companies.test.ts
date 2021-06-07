import axios from 'axios'
import { mocked } from 'ts-jest/utils'
import { fetchCompanies } from './companies'

jest.mock('axios')

const mockGet = mocked(axios.get)

const mockResponse = {
  data: {
    companies: []
  }
}

test('it returns response data when the request is successful', async () => {
  mockGet.mockResolvedValue(mockResponse)

  const result = await fetchCompanies()

  expect(result).toEqual(mockResponse.data)
})
