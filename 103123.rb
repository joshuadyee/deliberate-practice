# Write a program that uses a variable to store a word, then prints the number of letters in the word.

word = "house"
puts word.length


# Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

float = 5.5
puts float.to_i


# Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

num1 = 3
num2 = 4
puts num1 * num2

# Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "Josh"
last_name = "Yee"

puts first_name + " " + last_name


# Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first_name = "Josh"
last_name = "Yee"

puts "#{first_name} #{last_name}"


# Write a program that asks the user to input a word. If the word is "marco", print "polo".

puts "Enter a word:"
word = gets.chomp
if word == "marco"
    puts "polo"
end

# Write a program that uses variables to store three different colors, then prints out a sentence using the colors with 
# string concatenation (the + operator).

primary = "red"
secondary = "green"
tertiary = "violet"

puts "My favorite color is " + primary + ", " + "my second favorite is " + secondary + ", " + "and my least favorite is " + tertiary + " ."


# Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

color1 = "red"
color2 = "green"
color3 = "blue"

puts "My favorite colors are #{color1}, #{color2}, and #{color3}."


# Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

puts "Enter a name: "
name = gets.chomp
if name != "Santa"
    puts "You're not Santa."
end

# Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

book_title = "The Lightning Thief"
book_author = "Rick Riordan"
puts book_author + " wrote my favorite book called " + book_title + "."


# Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = "Grapes of Wrath"
author = "John Steinbeck"
puts "I love #{title} by #{author}!"


# Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

puts "Enter a password: "
password = gets.chomp

if password == "Joshua"
    puts "Shall we play a game?"
else 
    puts "Access denied"
end


# Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

city1 = "Los Angeles"
city2 = "New York"
city3 = "Chicago"

puts "My favorite cities are " + city1 + ", " + city2 + ", " + "and " + city3 + "."
