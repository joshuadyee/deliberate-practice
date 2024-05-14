# LOOPS 4 (1-4)

# Start with an array of numbers and compute the sum of all the numbers.

numbers = [5, 10, 8, 3]

sum = 0
i = 0
while i < numbers.length
	number = numbers[i]
	sum = sum + number
	i += 1
end
p sum

sum = 0
numbers.each do |number|
	sum += number
end
p sum

sum = numbers.reduce(0) { |sum, number| sum + number }
p sum


# Start with an array of strings and combine them all into a single string.

sports = ["volleyball", "basketball", "badminton"]

combined = ""
i = 0
while i < sports.length
	sport = sports[i]
	combined += sport
	i += 1
end
p combined

combined = ""
sports.each do |sport|
	combined += sport
end
p combined

combined = sports.reduce("") { |combined, sport| combined + sport}
p combined


# Start with an array of hashes and compute the sum of the prices (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

sum_of_prices = 0
i = 0 
while i < items.length
	item = items[i]
	sum_of_prices += item[:price]
	i += 1
end
p sum_of_prices

sum_of_prices = 0
items.each do |item|
	sum_of_prices += item[:price]
end
p sum_of_prices

sum_of_prices = items.reduce(0) { |sum_of_prices, item| sum_of_prices + item[:price]}
p sum_of_prices


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

min = numbers.min
p min
