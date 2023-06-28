class BookInventory < ApplicationRecord
    has_many :checkout_records
    belongs_to :book
end
