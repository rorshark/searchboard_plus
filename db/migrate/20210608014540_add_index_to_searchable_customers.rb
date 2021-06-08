class AddIndexToSearchableCustomers < ActiveRecord::Migration[6.1]
  disable_ddl_transaction!

  def change
    add_index :customers, :searchable, using: :gin, algorithm: :concurrently
  end
end
