# Conditionals 3 (1-10)

# Start with an array of numbers and create a new array with only the numbers less than 20.
# For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

numbers = [2, 32, 80, 18, 12, 3]
small_numbers = []

for num in numbers:
  if num < 20:
    small_numbers.append(num)

print(small_numbers)

# Start with an array of strings and create a new array with only the strings that start with the letter "w".
# For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

words = ["winner", "winner", "chicken", "dinner"]
w_words = []

for word in words:
  if word[0] == "w":
    w_words.append(word)

print(w_words)

# Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}]
expensive_items = []

for item in items:
  if item["price"] > 5:
    expensive_items.append(item)

print(expensive_items)

# Start with an array of numbers and create a new array with only the even numbers.
# For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

numbers = [2, 4, 5, 1, 8, 9, 7]
evens = []

for number in numbers:
  if number % 2 == 0:
    evens.append(number)

print(evens)

# Start with an array of strings and create a new array with only the strings shorter than 4 letters.
# For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

strings = ["a", "man", "a", "plan", "a", "canal", "panama"]
short_strings = []

for x in strings:
  if len(x) < 4:
    short_strings.append(x)

print(short_strings)

# Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

i = 0
short_named_items = []

while i < len(items):
  if len(items[i]["name"]) < 6:
    short_named_items.append(items[i])
  i += 1

print(short_named_items)

# Start with an array of numbers and create a new array with only the numbers less than 10.
# For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

nums = [8, 23, 0, 44, 1980, 3]
small_nums = []

for num in nums:
  if num < 10:
    small_nums.append(num)

print(small_nums)

# Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
# For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

words = ["big", "little", "good", "bad"]
no_b_words = []

for word in words:
  if word[0] != "b":
    no_b_words.append(word)

print(no_b_words)

# Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

cheap_items = []

for item in items:
  if item["price"] < 10:
    cheap_items.append(item)

print(cheap_items)

# Start with an array of numbers and create a new array with only the odd numbers.
# For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

numbers = [2, 4, 5, 1, 8, 9, 7]
odds = []

for number in numbers:
  if number % 2 > 0:
    odds.append(number)

print(odds)
