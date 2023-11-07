# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a 
# movie ticket based on the following conditions:

    # If the age is 12 years old or younger, the ticket price is $5.
    # If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the 
    # ticket price is $10.
    # If the customer is 60 years old or older, the ticket price is $7.

age = 12
time = 16

if age <= 12
  ticket_price = 5
elsif age > 12 && age < 60
  if time < 18
    ticket_price = 7
  else
    ticket_price = 10
  end
else 
    ticket_price = 7
end

puts "ticket price: $#{ticket_price}"

# Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. 
# Then calculate the fine amount based on the following conditions:

    # If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
    # If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
    # If the book is a reference book, there is no fine, regardless of the number of days overdue.
    # If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

book_type = "reference"
days_overdue = 6

if book_type == "regular"
  if days_overdue <= 7
    fine_amount = days_overdue * 1
  elsif days_overdue > 7
    fine_amount = days_overdue * 2
  end
elsif book_type == "special_collection"
  if days_overdue > 0
    fine_amount = days_overdue * 5
  end
else 
    fine_amount = 0
end

puts "fine amount: $#{fine_amount}"


# Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount 
# amount based on the following conditions:

    # If the total order value is less than $50, there is no discount.
    # If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
    # If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

order_value = 50.00
membership_level = "premium"
discount = 0

if order_value < 50.00
  discount = 0
elsif order_value >= 50.00 && order_value <= 100.00
  if membership_level == "regular"
    discount = order_value * 0.05
  else
    discount = order_value * 0.10
  end
elsif order_value > 100.00
  if membership_level == "regular"
    discount = order_value * 0.10
  else
    discount = order_value * 0.15
  end
end

puts "The discount is $#{discount}"


# Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate 
# the shipping fee based on the following conditions:

    # If the destination is domestic:
        # If the weight is less than or equal to 1 kg, the shipping fee is $5.
        # If the weight is greater than 1 kg, the shipping fee is $10.
    # If the destination is an international shipment:
        # If the weight is less than or equal to 1 kg, the shipping fee is $15.
        # If the weight is greater than 1 kg, the shipping fee is $25.


weight = 3
destination = "domestic"
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


# Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while true
  puts "Enter a word: "
  word = gets.chomp
  if word == "stop"
    break
  end
end


# Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

number = 0
while number <= 100
    puts number
    number += 5 
end

# Write a while loop that prints the number 9000 ten times.

number = 9000
i = 0
while i < 10 
   puts number
   i += 1 
end

# Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

while true
  puts "Enter a number: "
  number = gets.chomp.to_i
  if number > 10
    break
  end
end

# Write a while loop that prints the numbers 50 to 70.

number = 50
while number < 71 
  puts number
  number += 1 
end

# Write a while loop that prints the phrase "Around the world" 144 times.

count = 0
while count < 144
  puts "Around the world"
  count += 1
end 

# Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

while true 
  puts "Enter a word: "
  word = gets.chomp
  if word.length > 5
    break
  end 
end

# Write a while loop that prints the even numbers from 2 to 40.

number = 2
while number < 41
  puts number
  number += 2    
end
