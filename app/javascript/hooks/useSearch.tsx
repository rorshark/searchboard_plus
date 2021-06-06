import { useState, useEffect } from 'react'
import { fetchCustomers } from '../api/customers'
import { Customer } from '../types/customers'

export type SearchAPI = {
  error: boolean
  loading: boolean
  customers: Customer[]
}

export const useSearch = (): SearchAPI => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCustomers().then(({ customers }) => {
      setLoading(false)
      setCustomers(customers)
      setError(false)
    }).catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [setCustomers, setLoading, setError])

  return {
    error,
    loading,
    customers
  }
}
