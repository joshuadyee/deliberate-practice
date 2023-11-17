# LOOPS 4 (4-7) AND ARRAYS/HASHES 3 (1-2)

# Start with an array of numbers and compute the the minumum number.

numbers = [5, 10, 8, 3, 9]

min = numbers[0]
i = 0
while i < numbers.length
	number = numbers[i]
	if number < min
		min = number
	end
	i += 1
end
p min

min = numbers[0]
numbers.each do |number|
	if number < min
		min = number 
	end
end
p min

min = numbers.reduce(numbers[0]) do |min, number|
	if number < min 
		number
	else
		min
	end
end
p min

# Start with an array of strings and compute the total length of all the strings.

sports = ["volleyball", "basketball", "badminton"]

count = 0
i = 0
while i < sports.length
	sport = sports[i]
	count += sport.length
	i += 1
end
p count

count = 0
sports.each do |sport|
	count += sport.length
end
p count

count = sports.reduce(0) { |count, sport| count + sport.length }
p count


# Start with an array of hashes and find the hash with the lowest price (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

cheapest_item = items[0]
i = 0
while i < items.length
	item = items[i]
	if item[:price] < cheapest_item[:price]
		cheapest_item = item
	end
	i += 1
end
p cheapest_item

cheapest_item = items[0]
items.each do |item|
	if item[:price] < cheapest_item[:price]
		cheapest_item = item
	end
end
p cheapest_item

cheapest_item = items.reduce(items[0]) do |cheapest_item, item|
	if item[:price] < cheapest_item[:price]
		item
	else
		cheapest_item
	end
end
p cheapest_item


# Start with an array of numbers and compute product of all the numbers

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


# Convert an array of arrays into a hash.

paired_array = [[1, 3], [8, 9], [2, 16]]

paired_hash = {}
i = 0
while i < paired_array.length
	pair = paired_array[i]
	key = pair[0]
	value = pair[1]
	paired_hash[key] = value
	i += 1
end
p paired_hash


# Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.

array = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]

hash = {}
i = 0
while i < array.length
	hash[array[i][:id]] = array[i]
	i += 1
end
p hash
