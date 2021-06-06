import { Factory } from 'fishery'
import Faker from 'faker'
import { Company } from '../types/companies'

export const company = Factory.define<Company>(() => ({
  companyName: Faker.company.companyName()
}))
