# ARRAYS/HASHES 3 (2-3)

# Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.

items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]

items_hash = {}
i = 0 
while i < items.length
  item = items[i]
  key = item[:id]
  value = item
  items_hash[key] = value
  i += 1
end
p items_hash

items_hash = {}
items.each do |item|
  items_hash[item[:id]] = item
end
p items_hash


# Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.

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
