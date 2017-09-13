class User < ActiveRecord::Base
  has_many :matches, dependent: :destroy  
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

end
