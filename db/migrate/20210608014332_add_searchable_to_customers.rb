class AddSearchableToCustomers < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      ALTER TABLE customers
      ADD COLUMN searchable tsvector GENERATED ALWAYS AS (
        setweight(to_tsvector('english', coalesce(first_name, '')), 'A') ||
        setweight(to_tsvector('english', coalesce(last_name,'')), 'B')
      ) STORED;
    SQL
  end

  def down
    remove_column :customers, :searchable
  end
end
