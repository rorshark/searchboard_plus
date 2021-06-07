import qs from 'query-string'

export const pushParams = (params: Record<string, string>): void => {
  const initialState: Record<string, string> = {}

  const compactParams = Object
    .entries(params)
    .filter(([_, v]) => v)
    .reduce((a, [k, v]) => ({...a, [k]: v }), initialState)

  window.history.pushState(null, null, '?' + qs.stringify(compactParams))
}
