# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a 
# movie ticket based on the following conditions:
    # If the age is 12 years old or younger, the ticket price is $5.
    # If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
    # If the customer is 60 years old or older, the ticket price is $7.


customer_age = 35
movie_time = 7

if customer_age <= 12
  puts 5
end

if (customer_age >= 13 && customer_age <= 59) && movie_time < 6
  puts 7
elsif (customer_age >= 13 && customer_age <= 59) && movie_time >= 6
  puts 10
end

if customer_age >= 60
  puts 7
end
