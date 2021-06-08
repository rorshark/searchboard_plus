class Customer < ApplicationRecord
  include PgSearch::Model

  belongs_to :company

  pg_search_scope :search_name,
                  against: { first_name: 'A', last_name: 'B' },
                  using: {
                    tsearch: {
                      dictionary: 'english',
                      tsvector_column: 'searchable',
                      prefix: true
                    }
                  }
end
