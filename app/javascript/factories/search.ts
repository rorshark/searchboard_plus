import { Factory } from 'fishery'
import { SearchAPI, SearchParams } from '../hooks/useSearch'
import { DEFAULT_SEARCH_API } from '../context/SearchContext'

export const searchApi = Factory.define<SearchAPI>(() => DEFAULT_SEARCH_API)

export const searchParams = Factory.define<SearchParams>(() => ({
  search: '',
  filter_by_company_name: ''
}))
