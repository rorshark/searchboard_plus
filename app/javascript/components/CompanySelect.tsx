import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import { InputLabel, Select, MenuItem } from '@material-ui/core'

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
    <>
      <InputLabel id="company-name">Company Name</InputLabel>
      <Select 
        labelId="company-name" 
        inputProps={{
          "data-testid": "company-select"
        }}
        onChange={handleSelect}
        value={selectedCompany}>

        <MenuItem value="">
          All Companies
        </MenuItem>

        {companies.map(({ companyName }, index) => (
          <MenuItem 
            selected={isSelected(companyName)} 
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
