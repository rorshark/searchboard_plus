module Api
  class CustomersApiController < ApiController
    def index
      render json: {
        customers: [{
          first_name: 'Dougy',
          last_name: 'Pauly',
          company: {
            company_name: 'New Relic'
          }
        }, {
          first_name: 'Mister',
          last_name: 'Bones'
        }]
      }
    end
  end
end
