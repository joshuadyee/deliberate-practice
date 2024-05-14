# Write a while loop to print the numbers 1 through 10.

num = 1
while num <= 10 
   puts num
   num += 1 
end


# Write a while loop that prints the word "hello" 5 times.

i = 0 
while i < 5
   puts "hello"
   i += 1 
end 


# Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

puts "Enter a word: "
word = gets.chomp
while true
  if word == "stop"
    break
  end
end

# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a 
# movie ticket based on the following conditions:

# If the age is 12 years old or younger, the ticket price is $5.
# If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
# If the customer is 60 years old or older, the ticket price is $7.

age = 60
time = 20

if age <= 12
    ticket_price = 5
elsif age > 13 && age < 59
    if time < 18
        ticket_price = 7
    elsif time >= 18
        ticket_price = 10
    end
else 
    ticket_price = 7
end

puts "ticket price: $#{ticket_price}"
