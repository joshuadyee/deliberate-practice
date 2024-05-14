# LOOPS 4 (7-10) AND ARRAYS/HASHES 3 (1-4)

# Start with an array of numbers and compute product of all the numbers.

numbers = [5, 10, 8, 3]

product = 1
i = 0
while i < numbers.length
  number = numbers[i]
  product *= number
  i += 1 
end
p product

product = 1
numbers.each do |number|
  product *= number
end
p product

product = numbers.reduce(1) { |product, number| product * number }
p product

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

shortest_name_hash = items[0]
i = 0
while i < items.length
  item = items[i]
  if item[:name].length < shortest_name_hash[:name].length
    shortest_name_hash = item
  end
  i += 1
end
p shortest_name_hash

shortest_name_hash = items[0]
items.each do |item|
  if item[:name].length < shortest_name_hash[:name].length
    shortest_name_hash = item
  end
end
p shortest_name_hash

shortest_name_hash = items.reduce(items[0]) do |shortest, item| 
  if item[:name].length < shortest[:name].length
    item
  else
    shortest
  end
end
p shortest_name_hash

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

max = numbers.reduce(numbers[0]) { |max, number|
  if number > max
    number
  else
    max
  end
}
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

arr = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] 

hash = {}
i = 0
while i < arr.length
  hash[arr[i][:id]] = arr[i]
  i += 1
end
p hash


# Convert a string into a hash with keys for each letter in the string and values for the number of times the 
# letter appears in the string.

word = "football"
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

items_arr = []
items.each do |name, price|
  items_arr << [name, price]
end
p items_arr

items_arr = items.to_a
p items_arr
