# LOOPS 4 (8-10) AND ARRAYS/HASHES 3 (1-5)

# Start with an array of strings and combine them all into a single string, separated by dashes.

sports = ["volleyball", "basketball", "badminton"]

combined = ""
i = 0
while i < sports.length
  sport = sports[i]
  combined += "-" + sport
  i += 1
end
p combined

combined = ""
sports.each do |sport|
  combined += "-" + sport
end
p combined

combined = sports.reduce("") { |combined, sport| combined + "-" + sport }
p combined


# Start with an array of hashes and find the hash with the shortest name (from the :name key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

shortest_item = items[0]
i = 0
while i < items.length
  item = items[i]
  if item[:name].length < shortest_item[:name].length
    shortest_item = item
  end
  i += 1
end
p shortest_item

shortest_item = items[0]
items.each do |item|
  if item[:name].length < shortest_item[:name].length
    shortest_item = item
  end
end
p shortest_item

shortest_item = items.reduce(items[0]) { |shortest, item| 
  if item[:name].length < shortest[:name].length
    item
  else
    shortest
  end
}
p shortest_item


# Start with an array of numbers and compute the maximum number.

numbers = [5, 10, 8, 3]

max = numbers[0]
i = 0
while i < numbers.length
  number = numbers[i]
  if number > max
    max = number
  end
  i += 1
end
p max

max = numbers[0]
numbers.each do |number|
  if number > max
    max = number
  end
end
p max

max = numbers.reduce(numbers[0]) do |max, number| 
  if number > max
    number
  else 
    max
  end
end
p max


# Convert an array of arrays into a hash.

paired_arr = [[1, 3], [8, 9], [2, 16]]
paired_hash = {}

i = 0
while i < paired_arr.length
  pair = paired_arr[i]
  key = pair[0]
  value = pair[1]
  paired_hash[key] = value
  i += 1
end
p paired_hash

paired_hash = paired_arr.to_h
p paired_hash

# Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.

array = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] 

hash = {}
array.each do |element|
  key = element[:id]
  value = element
  hash[key] = value
end
p hash

# Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.

word = "bookkeeper"

letter_count = {}
i = 0
while i < word.length
  letter = word[i]
  if letter_count[letter] == nil
    letter_count[letter] = 0
  end
  letter_count[letter] += 1
  i += 1
end
p letter_count


# Convert a hash into an array of arrays.

items = {"chair" => 100, "book" => 14}

arr_items = []
items.each do |key, value|
  arr_items << [key, value]
end
p arr_items

arr_items = items.to_a
p arr_items


# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.

people = {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} 

arr_people = []
people.each do |id, person|
  person[:id] = id
  arr_people << person
end
p arr_people
