module Api
  class CustomersApiController < ApplicationController
    def index
      render json: {
        customers: [{
          first_name: 'Dougy', last_name: 'Pauly'
        }, {
          first_name: 'Mister', last_name: 'Bones'
        }]
      }
    end
  end
end
