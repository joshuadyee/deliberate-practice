# Variables 2 (1-10)

# Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "Joshua"
last_name = "Yee"
print(first_name + " " + last_name)

# Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation.

print(f"{first_name} {last_name}")

# Write a program that asks the user to input a word. If the word is "marco", print "polo".

# word = input("Enter a word:")
# if word == "marco":
#   print("polo")
# else:
#   print("guess again")


# Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).
  
color1 = "green"
color2 = "red"
color3 = "blue"

print("My favorite colors are " + color1 + ", " + color2 + ", and " + color3 + ".")

# Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

print(f"My favorite colors are {color1}, {color2}, and {color3}.")

# Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

name = input("Enter a name: ")
if name != "Santa":
  print("You're not Santa")

# Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = "The Lightning Thief"
author = "Rick Riordan"

print(f"{title} is written by {author}.")

# Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

password = input("Enter a password: ")

if password == "Joshua":
  print("Shall we play a game?")
else:
  print("Access denied")



# Conditionals 1 
  

# Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.
  
num = 1

if num == 10:
  print(0)
else: 
  print(-1)

# Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

num = 4
if num < 10:
  print(-1)
elif num > 10:
  print(1)
else: 
  print(0)

# Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

num1 = 20 
num2 = 10

if num1 < 10 and num2 < 10:
  print(1)
else: 
  print(0)

# Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
  
num = 12000

if num > 9000:
  print(1)
else:
  print(-1)


# Conditionals 3
  
# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

  # If the age is 12 years old or younger, the ticket price is $5.
  # If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
  # If the customer is 60 years old or older, the ticket price is $7.

customer_age = 66
movie_time = 1600

if customer_age <= 12:
  ticket_price = 5
if customer_age > 12 and customer_age < 60:
  if movie_time < 1800:
    ticket_price = 7
  else: 
    ticket_price = 10
if customer_age >= 60:
  ticket_price = 7

print(f'The ticket price is ${ticket_price}')

# Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

  # If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
  # If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
  # If the book is a reference book, there is no fine, regardless of the number of days overdue.
  # If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

book_type = "special collection"
days_overdue = 8

if book_type == "regular" and days_overdue <= 7:
  fine = days_overdue
elif book_type == "regular" and days_overdue > 7:
  fine = 2 * days_overdue
elif book_type == "reference":
  fine = 0
elif book_type == "special collection":
  fine = 5 * days_overdue

print(f"The fine amount ${fine}")

# Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

  # If the total order value is less than $50, there is no discount.
  # If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
  # If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

order_value = 200
membership = "premium"

if order_value < 50:
  discount = 0
elif order_value > 50 and order_value <= 100:
  if membership == "regular":
    discount = .05 * order_value
  elif membership == "premium":
    discount = .1 * order_value
elif order_value > 100:
  if membership == "regular":
    discount = .1 * order_value
  elif membership == "premium":
    discount = .15 * order_value

print(f"Your discount is ${discount}")

# Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

  # If the destination is domestic:
    # If the weight is less than or equal to 1 kg, the shipping fee is $5.
    # If the weight is greater than 1 kg, the shipping fee is $10.
  # If the destination is an international shipment:
    # If the weight is less than or equal to 1 kg, the shipping fee is $15.
    # If the weight is greater than 1 kg, the shipping fee is $25.

weight = 456
destination = "international"

if destination == "domestic":
  if weight <= 1:
    fee = 5
  else:
    fee = 10
elif destination == "international":
  if weight <= 1:
    fee = 15
  else: 
    fee = 35


print(f"Shipping fee: ${fee}")


