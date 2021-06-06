import { Factory } from 'fishery'
import Faker from 'faker'
import { Customer } from '../types/customers'
import { company } from './companies'

export const customer = Factory.define<Customer>(() => ({
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  company: company.build()
}));
