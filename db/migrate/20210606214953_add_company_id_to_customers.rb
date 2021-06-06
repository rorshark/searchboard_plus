class AddCompanyIdToCustomers < ActiveRecord::Migration[6.1]
  def change
    add_column :customers, :company_id, :uuid
    add_index :customers, :company_id
  end
end
