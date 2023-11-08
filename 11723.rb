# Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. 
# Then calculate the fine amount based on the following conditions:

    # If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
    # If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
    # If the book is a reference book, there is no fine, regardless of the number of days overdue.
    # If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.


book_type = "regular"
days_overdue = 3
fine_amount = 0

if book_type == "regular"
  if days_overdue <= 7
    fine_amount = days_overdue * 1
  else
    fine_amount = days_overdue * 2
  end
elsif book_type == "reference"
    fine_amount = 0
elsif book_type == "special collection"
    fine_amount = days_overdue * 5
end

puts "fine amount: $#{fine_amount}"


# Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount 
# amount based on the following conditions:

# If the total order value is less than $50, there is no discount.
# If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
# If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.


order_value = 150
membership = "regular"
discount = 0

if order_value < 50
  discount = 0
elsif order_value >= 50 && order_value <= 100
  if membership == "regular"
    discount = order_value * 0.05
  elsif membership == "premium"
    discount = order_value * 0.10
  end
else
    if membership == "regular"
      discount = order_value * 0.10
    elsif membership == "premium"
      discount = order_value * 0.15
    end
end

puts "discount amount: $#{discount}"


# Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate4
# the shipping fee based on the following conditions:

    # If the destination is domestic:
        # If the weight is less than or equal to 1 kg, the shipping fee is $5.
        # If the weight is greater than 1 kg, the shipping fee is $10.
    # If the destination is an international shipment:
        # If the weight is less than or equal to 1 kg, the shipping fee is $15.
        # If the weight is greater than 1 kg, the shipping fee is $25.



weight = 4
destination = "international"
shipping_fee = 0

if destination == "domestic"
  if weight <= 1
    shipping_fee = 5
  else
    shipping_fee = 10
  end
elsif destination == "international"
  if weight <= 1
    shipping_fee = 15
  else
    shipping_fee = 25
  end
end

puts "shipping fee: $#{shipping_fee}"


# Start with an array of numbers and create a new array with each number times 3.
# For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [2, 4, 6, 8]

tripled_numbers = [] 
i = 0 
while i < numbers.length
  tripled_numbers.push(numbers[i] * 3)
  i += 1
end
pp tripled_numbers


tripled_numbers = [] 
numbers.each do |number|
  pp number * 3
end

tripled_numbers = [] 
i = 0
numbers.length.times do
  tripled_numbers << numbers[i] * 3    
  i += 1
end 
pp tripled_numbers


# Start with an array of strings and create a new array with each string upcased.

strings = ["dodge", "duck", "dip", "dive", "dodge"]

upcase_strings =[]
i = 0
while i < strings.length
  upcase_strings << strings[i].upcase
  i += 1
end
pp upcase_strings

upcase_strings = []
strings.each do |string|
  pp string.upcase
end

upcase_strings = []
i = 0
strings.length.times do 
  upcase_strings << strings[i].upcase
  i += 1 
end
pp upcase_strings


# Start with an array of hashes and create a new array of string values from each hash's :name key.

people = [{name: "Joshua", age: 25}, {name: "Zachary", age: 27}, {name: "Rhiannon", age: 29}]

names_array = []
i = 0
p people[0][:name]
p people.length

while i < people.length
  names_array << people[i][:name]
  i += 1
end
pp names_array
