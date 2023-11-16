# LOOPS 4 (1-5) AND ARRAYS/HASHES 3(1)

# Start with an array of numbers and compute the sum of all the numbers.

numbers = [5, 10, 8, 3]

sum = 0
i = 0
while i < numbers.length
  number = numbers[i]
  sum += number
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

combined = sports.reduce("") { |combined, sport| combined + sport }
p combined

# Start with an array of hashes and compute the sum of the prices (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] 

sum = 0
i = 0
while i < items.length
  item = items[i]
  sum += item[:price]
  i += 1
end
p sum

sum = 0
items.each do |item|
  sum += item[:price]
end
p sum

sum = items.reduce(0) { |sum, item| sum + item[:price] }
p sum

# Start with an array of numbers and compute the the minimum number.

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

min = numbers.reduce(numbers[0]) { |min, number|
  if number < min 
   number
  else
    min
  end
}
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


# Convert an array of arrays into a hash.
# For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

numbers = [[1, 3], [8, 9], [2, 16]]
numbers_hash = {}
i = 0
while i < numbers.length
  key = numbers[i][0]
  value = numbers[i][1]
  numbers_hash[key] = value
  i += 1
end
p numbers_hash
