#LOOPS 3 (2-7) AND ARRAYS/HASHES 1 (6-10)

# Start with an array of strings and create a new array with only the strings that start with the letter "w".
# For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

words = ["winner", "winner", "chicken", "dinner"]

new_words = []
i = 0
while i < words.length
  word = words[i]
  if word[0] == "w"
    new_words << word
  end 
  i += 1
end
p new_words

new_words = []
words.each do |word|
  if word[0] == "w"
    new_words << word
  end
end
p new_words

new_words = words.select {|word| word[0] == "w"}
p new_words


# Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

expensive_items = []
i = 0
while i < items.length
  item = items[i]
  if item[:price] > 5
    expensive_items << item
  end
  i += 1
end
p expensive_items

expensive_items = []
items.each do |item|
  if item[:price] > 5
  expensive_items << item
  end
end
p expensive_items

expensive_items = items.select {|item| item[:price] > 5}
p expensive_items


# Start with an array of numbers and create a new array with only the even numbers.

numbers = [2, 4, 5, 1, 8, 9, 7]

even_numbers = []
i = 0
while i < numbers.length
  number = numbers[i]
  if number % 2 == 0
    even_numbers << number
  end
  i += 1
end
p even_numbers

even_numbers = []
numbers.each do |number|
  if number % 2 == 0
    even_numbers << number
  end
end
p even_numbers

even_numbers = numbers.select {|number| number % 2 == 0}
p even_numbers


# Start with an array of strings and create a new array with only the strings shorter than 4 letters.

strings = ["a", "man", "a", "plan", "a", "canal", "panama"]

short_strings = []
i = 0
while i < strings.length
  string = strings[i]
  if string.length < 4
    short_strings << string
  end
  i += 1
end
p short_strings

short_strings = []
strings.each do |string|
  if string.length < 4
    short_strings << string
  end
end
p short_strings

short_strings = strings.select {|string| string.length < 4}
p short_strings


# Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

short_items = []
i = 0
while i < items.length
  item = items[i]
  if item[:name].length < 6
    short_items << item
  end
  i += 1
end
p short_items

short_items = []
items.each do |item|
  if item[:name].length < 6
    short_items << item
  end
end
p short_items

short_items = items.select {|item| item[:name].length < 6}
p short_items

short_items = []
i = 0
items.length.times do
  item = items[i]
  if item[:name].length < 6
    short_items << item
  end
  i += 1
end
p short_items


# Start with an array of numbers and create a new array with only the numbers less than 10.

numbers = [8, 23, 0, 44, 1980, 3]

small_numbers = []
i = 0
while i < numbers.length
  number = numbers[i]
  if number < 10
    small_numbers << number
  end
  i += 1
end
p small_numbers

small_numbers = []
numbers.each do |number|
  if number < 10
    small_numbers << number
  end
end
p small_numbers

small_numbers = numbers.select {|number| number < 10}
p small_numbers


# Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["Josh", "Tyler", "Tommy"]
i = 0
while i < names.length
  name = names[i]
  puts name
  i += 1
end

# Create an array to store 2 strings. Then add one string to the array and print the array on one line.

strings = ["ball", "catch"]
strings.push("run")
p strings

# Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

numbers = [4, 24, 46, 3, 77]
numbers[0] = numbers[0] * 10
p numbers

# Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

numbers = [55, 6]
i = 0
while i < numbers.length
  number = numbers[i]
  puts number
  i += 1
end

# Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["United States", "Canada", "Mexico"]
countries << "Costa Rica"
p countries
