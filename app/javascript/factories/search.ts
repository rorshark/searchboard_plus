import { Factory } from 'fishery'
import { SearchAPI, SearchParams } from '../hooks/useSearch'
import { defaultSearchApi } from '../context/SearchContext'

export const searchApi = Factory.define<SearchAPI>(() => defaultSearchApi)

export const searchParams = Factory.define<SearchParams>(() => ({
  search: '',
  filter_by_company_name: ''
}))
