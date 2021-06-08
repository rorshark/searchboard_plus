import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import { ALL_COMPANIES } from '../hooks/useSearch'
import { InputLabel, Select, MenuItem } from '@material-ui/core'

const CompanySelect: React.FC = () => {
  const { 
    companies, 
    fetchCompanies, 
    selectedCompany, 
    setSelectedCompany 
  } = useContext(SearchContext)

  const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(evt.target.value)
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <>
      <InputLabel id="company-name">Company Name</InputLabel>
      <Select 
        labelId="company-name" 
        inputProps={{
          "data-testid": "company-select"
        }}
        onChange={handleSelect}
        value={selectedCompany}>

        <MenuItem value={ALL_COMPANIES}>
          All Companies
        </MenuItem>

        {companies.map(({ companyName }, index) => (
          <MenuItem 
            data-testid={`company-${index}`} 
            key={index} 
            value={companyName}>
            {companyName}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default CompanySelect
