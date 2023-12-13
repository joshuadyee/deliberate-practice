# Start with an array of numbers and create a new array with only the numbers less than 20.

numbers =  [2, 32, 80, 18, 12, 3]

small_numbers = []
i = 0
while i < numbers.length
  number = numbers[i]
  if number < 20
    small_numbers << number
  end
  i += 1
end
p small_numbers

small_numbers = []
numbers.each do |number|
  if number < 20
    small_numbers << number
  end
end
p small_numbers

small_numbers = numbers.select { |number| number < 20 }
p small_numbers


# Start with an array of strings and create a new array with only the strings that start with the letter "w".

words =  ["winner", "winner", "chicken", "dinner"]

w_words = []
words.each do |word|
  if word[0] == "w"
    w_words << word
  end
end
p w_words

w_words = words.select { |word| word[0] == "w" }
p w_words

# Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

expensive_items = []
items.each do |item|
  if item[:price] > 5
    expensive_items << item
  end
end
p expensive_items

expensive_items = items.select { |item| item[:price] > 5 }
p expensive_items


# Start with an array of numbers and create a new array with only the even numbers.

numbers = [2, 4, 5, 1, 8, 9, 7] 

even_numbers = []
numbers.each do |number|
  if number.even?
    even_numbers << number
  end
end
p even_numbers

even_numbers = numbers.select { |number| number % 2 == 0 }
p even_numbers

# Start with an array of strings and create a new array with only the strings shorter than 4 letters.

words = ["a", "man", "a", "plan", "a", "canal", "panama"]

short_words = []
words.each do |word|
  if word.length < 4
    short_words << word
  end
end
p short_words

short_words = words.select { |word| word.length < 4 }
p short_words

# Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).

long_names = []
items.each do |item|
  if item[:name].length < 6
    long_names << item
  end
end
p long_names

long_names = items.select { |item| item[:name].length < 6 }
p long_names

# Start with an array of numbers and create a new array with only the numbers less than 10.

numbers = [8, 23, 0, 44, 1980, 3] 

small_numbers = []
numbers.each do |number|
  if number < 10
    small_numbers << number
  end
end
p small_numbers

small_numbers = numbers.select { |number| number < 10 }
p small_numbers


# Start with an array of strings and create a new array with only the strings that don't start with the letter "b".

strings = ["big", "little", "good", "bad"]

no_b = []
strings.each do |string|
  if string[0] != "b"
    no_b << string
  end
end
p no_b

no_b = strings.select { |string| string[0] != "b"}
p no_b


# Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).

cheap_items = []
items.each do |item|
  if item[:price] < 10
    cheap_items << item
  end
end
p cheap_items

cheap_items = items.select { |item| item[:price] < 10 }
p cheap_items

# Start with an array of numbers and create a new array with only the odd numbers.

nums = [2, 4, 5, 1, 8, 9, 7]

odds = []
nums.each do |num|
  if num.odd?
    odds << num
  end
end
p odds

odds = nums.select { |num| num % 2 != 0 }
p odds