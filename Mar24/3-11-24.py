# Conditionals (3-10)

# Start with an array of hashes and create a new array of string values from each hash's :name key.

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] 
names = []

for person in people:
  names.append(person["name"])

print(names)

# Start with an array of numbers and create a new array with each number plus 7.

numbers = [1, 2, 3]
new_numbers = []

for number in numbers:
  new_numbers.append(number + 7)

print(new_numbers)

# Start with an array of strings and create a new array with each string's length.
# For example, ["hello", "goodbye"] becomes [5, 7].
  
words = ["hello", "goodbye"]
letter_count = []

for word in words:
  letter_count.append(len(word))

print(letter_count)

# Start with an array of hashes and create a new array of number values from each hash's :age key.
# For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
  
people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] 
ages = []

for person in people:
  ages.append(person["age"])

print(ages)

# Start with an array of numbers and create a new array with each number divided by 2.
# For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

nums = [1, 2, 3]
halved_nums = []

for num in nums:
  halved_nums.append(num / 2)

print(halved_nums)

# Start with an array of strings and create a new array with each string's first letter only.
# For example, ["hello", "goodbye"] becomes ["h", "g"].

words = ["hello", "goodbye"]
first_letters = []

for word in words:
  first_letters.append(word[0])

print(first_letters)

# Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
# For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

print(people)
doubled_ages = []

for person in people:
  doubled_ages.append(person["age"] * 2)

print(doubled_ages)

# Start with an array of numbers and create a new array with each number converted into a string.
# For example, [1, 2, 3] becomes ["1", "2", "3"].

strings = []
for num in nums:
  strings.append(str(num))

print(strings)