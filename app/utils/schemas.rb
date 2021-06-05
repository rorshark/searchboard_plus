require 'json_schema'

module Schemas
  def self.find_schema(name)
    schema_path = Rails.root + "app/controllers/api/schemas/#{name}.json"
    schema_data = JSON.load(schema_path)
    JsonSchema.parse!(schema_data)
  end
end
