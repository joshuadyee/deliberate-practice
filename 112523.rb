# ARRAYS/HASHES 3 (4-7)

# Convert a hash into an array of arrays.

items_hash = {"chair" => 100, "book" => 14} 

items_array = []
items_hash.each do |item, price|
  items_array << [item, price]
end
p items_array

items_array = items_hash.map { |item, price| [item, price] }
p items_array

# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.

people = {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}}

people_arr = []
people.each do |id, person|
  person[:id] = id
	people_arr << person
end
p people_arr

people_arr = people.map do |id, person| 
  person[:id] = id
	person
end
p people_arr


# Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.

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

word_count = Hash.new(0)
words.each { |word| word_count[word] += 1 }
p word_count


# Convert a hash into a flat array containing all the hash’s keys and values.

hash = {"a" => 1, "b" => 2, "c" => 3, "d" => 4} 

array = []
hash.each { |key, value| 
	array << key
	array << value
}
p array
