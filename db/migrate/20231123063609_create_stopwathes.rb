class CreateStopwathes < ActiveRecord::Migration[7.1]
  def change
    create_table :stopwathes do |t|
      t.references :user, null: false, foreign_key: true  # ユーザーとの関連付け
      t.integer :duration, null: false
      t.datetime :start_time, null: false  # ストップウォッチ開始時刻
      t.datetime :end_time  # ストップウォッチ終了時刻（計測が終了している場合にのみ記録）
      t.timestamps
    end
  end
end
