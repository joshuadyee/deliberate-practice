# Conditionals 4 (1-10)

# Start with an array of numbers and compute the sum of all the numbers.
# For example, [5, 10, 8, 3] becomes 26.

numbers = [5, 10, 8, 3]
sum = 0
# i = 0

# while i < len(numbers):
#   sum += numbers[i]
#   i += 1

# print(sum)

for number in numbers:
  sum += number

print(sum)

# Start with an array of strings and combine them all into a single string.
# For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

words = ["volleyball", "basketball", "badminton"]
combined = ""

for word in words:
  combined += word

print(combined)

# Start with an array of hashes and compute the sum of the prices (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

items = [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}]
total_price = 0

for item in items:
  total_price += item["price"]

print(total_price)

# Start with an array of numbers and compute the the minumum number.
# For example, [5, 10, 8, 3, 9] becomes 3.

numbers = [5, 10, 8, 3, 9]
min = numbers[0]

for number in numbers:
  if number < min:
    min = number

print(min)

# Start with an array of strings and compute the total length of all the strings.
# For example, ["volleyball", "basketball", "badminton"] becomes 29.

total_letters = 0

for word in words:
  total_letters += len(word)

print(total_letters)

# Start with an array of hashes and find the hash with the lowest price (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

cheapest_item = items[0]

for item in items:
  if item["price"] < cheapest_item["price"]:
    cheapest_item = item

print(cheapest_item)

# Start with an array of numbers and compute product of all the numbers.
# For example, [5, 10, 8, 3] becomes 1200.

nums = [5, 10, 8, 3]
product = 1

for num in nums:
  product *= num

print(product)

# Start with an array of strings and combine them all into a single string, separated by dashes.
# For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

combined_words = ""

for word in words:
  combined_words += ("-" + word)

print(combined_words)

# Start with an array of hashes and find the hash with the shortest name (from the :name key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

shortest_named_item = items[0]

for item in items:
  if len(item["name"]) < len(shortest_named_item["name"]):
    shortest_named_item = item

print(shortest_named_item)

# Start with an array of numbers and compute the maximum number.
# For example, [5, 10, 8, 3] becomes 10.

max = numbers[0]

for number in numbers:
  if number > max:
    max = number

print(max)