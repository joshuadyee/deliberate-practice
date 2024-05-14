#LOOPS 3 (1-3) AND ARRAYS/HASHES 1 (1-5)

# Start with an array of numbers and create a new array with only the numbers less than 20.
# For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [2, 4 , 50, 45, 23, 4, 58]

new_numbers = []
i = 0
while i < numbers.length
  number = numbers[i]
  if number < 20
    new_numbers << number
  end  
  i += 1  
end
p new_numbers

new_numbers = []
numbers.each do |number|
   if number < 20
    new_numbers << number
   end 
end
p new_numbers

new_numbers = numbers.select { |number| number < 20 }
p new_numbers


# Start with an array of strings and create a new array with only the strings that start with the letter "w".
# For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

array = ["winner", "winner", "chicken", "dinner"]

new_array = []
i = 0
while i < array.length
  word = array[i]
  if word[0] == "w"
    new_array << word
  end  
  i += 1  
end
p new_array

new_array = []
array.each do |word|
  if word[0] == "w"
    new_array << word
  end
end
p new_array

new_array = array.select { |word| word[0] == "w" }
p new_array


# Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

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

expensive_items = items.select { |item| item[:price] > 5 }
p expensive_items


# Create an array to store 3 words. Then add two more words to the array and print the array on one line.

words = ["here", "we", "go"]
words.push("all", "day")
p words

# Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["l", "m", "n", "o"]
letters[1] = 5
p letters

# Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [3, 4, 5, 6, 7]
i = 0
while i < numbers.length
  number = numbers[i]
  puts number  
  i += 1  
end

# Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

number = [1]
number.push(2, 3, 4, 5, 6, 7)
p number

# Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

words = ["dog", "cat", "bird"]
words[2] = words[2].upcase
p words
