import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'

const CompanySelect: React.FC = () => {
  const { 
    companies, 
    fetchCompanies, 
    selectedCompany, 
    setSelectedCompany 
  } = useContext(SearchContext)

  const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const companyName = evt.target.value

    if (!companyName) {
      setSelectedCompany('')
      return
    }

    const company = companies.find((c) => c.companyName === companyName)

    if (!company) throw new Error(`${companyName} not found`)

    setSelectedCompany(company.companyName)
  }

  const isSelected = (name: string) => {
    return selectedCompany === name
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <label>
      Company Name
      <select 
        name="company" 
        data-testid="company-select" 
        onChange={handleSelect}>
        <option value="">Please choose an option</option>

        {companies.map(({ companyName }, index) => (
          <option 
            selected={isSelected(companyName)} 
            data-testid={`company-${index}`} 
            key={index} 
            value={companyName}>
            {companyName}
          </option>
        ))}
      </select>
    </label>
  )
}

export default CompanySelect
