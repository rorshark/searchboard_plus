import axios from 'axios'
import { Customer } from '../types/customers'

export type CustomersResponse = {
  customers: Customer[]
}

export const fetchCustomers = async (): Promise<CustomersResponse> => {
  const { data } = await axios.get('/api/customers', {
    headers: {
      'Content-Type': 'application/json',
      'Key-Inflection': 'camel'
    }
  })

  return data
}
