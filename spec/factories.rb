FactoryBot.define do
  factory :company do
    company_name { Faker::Company.name }
  end

  factory :customer do
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    company
  end
end
