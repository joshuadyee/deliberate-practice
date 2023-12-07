# LOOPS 5 (1-3), ARRAY/HASHES 3 (5-7)

# Use a nested loop to convert an array of number pairs into a single flattened array.
# For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

paired_arr = [[1, 3], [8, 9], [2, 16]]
flattened = []

i = 0
while i < paired_arr.length
  pair = paired_arr[i]
  j = 0
  while j < pair.length
    number = pair[j]
    flattened << number
    j += 1
  end
  i += 1
end

p flattened


# Use a nested loop with two arrays of strings to create a new array of strings with each string combined.

arr1 = ["a", "b", "c"] 
arr2 = ["d", "e", "f", "g"]

combined_arr = []

i = 0
while i < arr1.length
  letter1 = arr1[i]
  j = 0
  while j < arr2.length
    letter2 = arr2[j]
    combined_arr << letter1 + letter2
    j += 1
  end
  i += 1
end
p combined_arr

combined_arr = []
arr1.each do |letter1|
  arr2.each do |letter2|
    combined_arr << letter1 + letter2
  end
end
p combined_arr


# Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.

letters = ["a", "b", "c", "d"]

# while loop
combined_letters = []
i = 0
while i < letters.length
  letter = letters[i]
  j = 0
  while j < letters.length
    element = letters[j]
    if letter != element
      combined_letters << letter + element
    end
    j += 1
  end
  i += 1
end
p combined_letters

# each loop
combined_letters = []
letters.each do |letter1|
  letters.each do |letter2|
    if letter1 != letter2
      combined_letters << letter1 + letter2
    end
  end
end
p combined_letters


# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.

people = {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} 

people_array = []
people.each do |id, person|
  person[:id] = id
  people_array << person
end
p people_array

# Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.

words = ["do", "or", "do", "not"]

hashed_words = {}
i = 0
while i < words.length
  word = words[i]
  if hashed_words[word] == nil
    hashed_words[word] = 0
  end
  hashed_words[word] += 1
  i += 1
end
p hashed_words 

hashed_words = {}
words.each do |word|
  if hashed_words[word] == nil
    hashed_words[word] = 0
  end
  hashed_words[word] += 1
end
p hashed_words 


# Convert a hash into a flat array containing all the hash’s keys and values.

hash = {"a" => 1, "b" => 2, "c" => 3, "d" => 4}  

flat_array = []
hash.each do |letter, number|
  flat_array << letter
  flat_array << number
end
p flat_array



