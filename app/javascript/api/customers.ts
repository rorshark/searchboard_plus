import axios from 'axios'
import { Customer } from '../types/customers'
import { SearchParams } from '../hooks/useSearch'

export type CustomersResponse = {
  customers: Customer[]
}

export const fetchCustomers = async (params: SearchParams): Promise<CustomersResponse> => {
  const { data } = await axios.get('/api/customers', {
    params,
    headers: {
      'Content-Type': 'application/json',
      'Key-Inflection': 'camel'
    }
  })

  return data
}
