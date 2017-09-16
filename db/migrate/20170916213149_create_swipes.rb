class CreateSwipes < ActiveRecord::Migration[5.1]
  def change
    create_table :swipes do |t|
      t.integer :swiper
      t.integer :swipee

      t.timestamps
    end
  end
end
