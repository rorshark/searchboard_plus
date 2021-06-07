import axios from 'axios'
import { Company } from '../types/companies'

export type CompaniesResponse = {
  companies: Company[]
}

export const fetchCompanies = async (): Promise<CompaniesResponse> => {
  const { data } = await axios.get('/api/companies', {
    headers: {
      'Content-Type': 'application/json',
      'Key-Inflection': 'camel'
    }
  })

  return data
}
