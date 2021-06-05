RSpec::Matchers.define :match_response_schema do |schema|
  match do |response|
    _, @errors = Schemas.find_schema(schema).validate(response.parsed_body)
    @errors.empty?
  end

  failure_message do |actual|
    <<~MSG
      #{@errors.map(&:to_s).join("\n")}

      Recieved: #{actual.parsed_body}
    MSG
  end
end
