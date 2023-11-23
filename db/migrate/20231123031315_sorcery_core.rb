class SorceryCore < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :email,            null: false
      t.string :crypted_password
      t.string :salt
      t.string :name, null: false
      t.string :line_id

      t.timestamps null: false  
    end
  end
end
