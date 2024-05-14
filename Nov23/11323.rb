# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a 
# movie ticket based on the following conditions:
    # If the age is 12 years old or younger, the ticket price is $5.
    # If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
    # If the customer is 60 years old or older, the ticket price is $7.


age = 44
time = 8

if age <= 12
  ticket_price = 5
elsif age > 12 && age < 60
  if time < 6
    ticket_price = 7
  elsif time >= 6
    ticket_price = 10
  end
else 
  ticket_price = 7
end

puts ticket_price = #{ticket_price}


# Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. 
# Then calculate the fine amount based on the following conditions:

    # If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
    # If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
    # If the book is a reference book, there is no fine, regardless of the number of days overdue.
    # If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.



book_type = "regular"
days_overdue = 4

if book_type == "regular"
  if days_overdue <= 7
    fine = 1
  elsif days_overdue > 7
    fine = 2
  end
elsif book_type == "special_collection"
  if days_overdue true 
    fine = 5
  end
else
  fine = 0
end

puts "The fine per day is $#{fine}."
