# ARRAYS/HASHES 3 (1-7)

# Convert an array of arrays into a hash.

paired_arr = [[1, 3], [8, 9], [2, 16]] 

paired_hash = {}
i = 0
while i < paired_arr.length
  pair = paired_arr[i]
  paired_hash[pair[0]] = pair[1]
  i += 1
end
p paired_hash

paired_hash = {}
paired_arr.each do |pair|
  paired_hash[pair[0]] = pair[1]
end
p paired_hash


# Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.

items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]

items_hash = {}
i = 0 
while i < items.length
  item = items[i]
  items_hash[item[:id]] = item
  i += 1
end
p items_hash

items_hash = {}
items.each do |item|
  items_hash[item[:id]] = item
end
p items_hash

# Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.

word = "bookkeeping"

letter_counter = {}
i = 0
while i < word.length
  letter = word[i]
  if letter_counter[letter] == nil
    letter_counter[letter] = 0
  end
  letter_counter[letter] += 1
  i += 1
end
p letter_counter


# Convert a hash into an array of arrays.

items = {"chair" => 100, "book" => 14}

items_array = items.to_a
p items_array

items_array = []
items.each do |item, price|
  items_array << [item, price]
end
p items_array


# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.

people = {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} 

people_array = []
people.each do |id, person|
  person[:id] = id
  people_array << person
end
p people_array


# Convert an array of strings into a hash with keys for each string in the array and values for the number of times
# the string appears in the array.

words = ["do", "or", "do", "not"]

word_count = {}
i = 0
while i < words.length
  word = words[i]
  if word_count[word] == nil
    word_count[word] = 0
  end
  word_count[word] += 1
  i += 1
end
p word_count

word_count = {}
words.each do |word|
  if word_count[word] == nil
    word_count[word] = 0
  end
  word_count[word] += 1
end
p word_count


# Convert a hash into a flat array containing all the hash’s keys and values.

hash = {"a" => 1, "b" => 2, "c" => 3, "d" => 4}

array = []
hash.each do |str, num|
  array << str
  array << num
end
p array
