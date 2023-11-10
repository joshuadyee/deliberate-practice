# Start with an array of numbers and create a new array with each number times 3.
# For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [2, 4, 6, 8]

new_numbers = []
i = 0
while i < numbers.length
  number = numbers[i]
  new_numbers << number * 3
  i += 1    
end
pp new_numbers

new_numbers = []
numbers.each do |number|
  new_numbers << number * 3    
end
pp new_numbers

new_numbers = numbers.map { |number| number * 3 }
pp new_numbers


# Start with an array of strings and create a new array with each string upcased.
# For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

words = ["breakfast", "lunch", "dinner"]

upcased_words = []
i = 0
while i < words.length
  word = words[i]
  upcased_words << word.upcase 
  i += 1   
end
pp upcased_words

upcased_words = []
words.each do |word|
  upcased_words << word.upcase 
end
pp upcased_words

upcased_words = words.map{ |word| word.upcase }
pp upcased_words


# Start with an array of hashes and create a new array of string values from each hash's :name key.
# For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

friends = [{name: "Kyle", age: 25}, {name: "Brando", age: 25}]

names = []
i = 0
while i < friends.length
  name = friends[i][:name]
  names << name
  i += 1
end
pp names

names = []
friends.each do |name|
  names << name[:name]
end
pp names

names = friends.map { |name| name[:name] }
pp names


# Start with an array of numbers and create a new array with each number plus 7.
# For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [1, 3, 5]
new_numbers = []
i = 0
while i < numbers.length
  new_numbers << numbers[i] + 7
  i += 1  
end
pp new_numbers

new_numbers = []
numbers.each do |number|
  new_numbers << number + 7  
end
pp new_numbers

new_numbers = numbers.map { |number| number + 7}
pp new_numbers


# Start with an array of strings and create a new array with each string's length.
# For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["hello", "goodbye"]
letters = []
i = 0
while i < strings.length
  letters << strings[i].length  
  i += 1 
end
pp letters

letters = []
strings.each do |word|
  letters << word.length
end
pp letters

letters = strings.map { |letter| letter.length }
pp letters


# Start with an array of strings and create a new array with each string's first letter only.
# For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["hello", "goodbye"]
new_array = []

i = 0
while i < strings.length
  new_array << strings[i][0]
  i += 1 
end
pp new_array

new_array = []
strings.each do |letter|
  new_array << letter[0] 
end
pp new_array

new_array = strings.map { |letter| letter[0] }
pp new_array


# Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
# For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

friends = [{name: "Kyle", age: 25}, {name: "Brando", age: 25}]

age2x = []
i = 0
while i < friends.length
  age = friends[i][:age]
  age2x << age * 2  
  i += 1  
end
pp age2x

age2x = []
friends.each do |friend|
  age2x << friend[:age] * 2    
end
pp age2x

age2x = friends.map { |friend| friend[:age] * 2}
pp age2x


# Start with an array of numbers and create a new array with each number converted into a string.
# For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [1, 2, 3]

strings = []
i = 0
while i < numbers.length
  strings << numbers[i].to_s  
  i += 1 
end
pp strings

strings = []
numbers.each do |number| 
  strings << number.to_s    
end
pp strings

strings = numbers.map { |number| number.to_s}
pp strings
