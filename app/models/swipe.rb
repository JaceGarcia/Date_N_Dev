class Swipe < ApplicationRecord
    belongs_to :user, dependent: :destroy    
end
