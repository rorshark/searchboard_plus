import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const CompanySelect: React.FC = () => {
  const { companies, selectedCompany, setSelectedCompany } = useContext(SearchContext)

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

  return (
    <label>
      Company Name
      <select 
        name="company" 
        data-testid="company-select" 
        defaultValue={selectedCompany} 
        onChange={handleSelect}>
        <option value="">Please choose an option</option>

        {companies.map(({ companyName }, index) => (
          <option data-testid={`company-${index}`} key={index} value={companyName}>
            {companyName}
          </option>
        ))}
      </select>
    </label>
  )
}

export default CompanySelect
