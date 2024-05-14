# Convert an array of arrays into a hash.
# For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

pairs = [[1, 3], [8, 9], [2, 16]]

pairs_dictionary = {}

for pair in pairs:
  pairs_dictionary[pair[0]] = pair[1]

print(pairs_dictionary) 

# Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
# For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

things = [
  {"id": 1, "color": "blue", "price": 32},
  {"id": 2, "color": "red", "price": 12}
]
things_dictionary = {}

for thing in things:
  things_dictionary[thing["id"]] = thing

print(things_dictionary)

# Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
# For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

word = "bookkeeper"
letter_count = {}

for letter in word:
  if letter not in letter_count:
    letter_count[letter] = 0
  letter_count[letter] += 1

print(letter_count)

# Convert a hash into an array of arrays.
# For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

prices = {"chair": 100, "book": 14}
prices_list = []

for item in prices:
  prices_list.append([item, prices[item]])

print(prices_list)

# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
# For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

people = {
  321: {"name": "Alice", "age": 31},
  322: {"name": "Maria", "age": 27}
}
people_list = []

for id, person in people.items():
  people_list.append(
    {"id": id, "name": person["name"], "age": person["age"]}
  )
print(people_list)

# Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
# For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

words = ["do", "or", "do", "not"]
word_count = {}

for word in words:
  if word not in word_count:
    word_count[word] = 0
  word_count[word] += 1

print(word_count)

# Convert a hash into a flat array containing all the hash’s keys and values.
# For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

dictionary = {"a": 1, "b": 2, "c": 3, "d": 4}
flattened_list = []

for letter in dictionary:
  flattened_list.append(letter)
  flattened_list.append(dictionary[letter])

print(flattened_list)

# Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
# For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

prices = {"chair": 75, "book": 15}
items = [
  {"name": "chair", "color": "red", "weight": 10},
  {"name": "book", "color": "black", "weight": 1}
]
items_dict = {}

for item in items:
  items_dict[item["name"]] = { 
    "price": prices[item["name"]],
    "color": item["color"],
    "weight": item["weight"]
  }

print(items_dict)

# Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
# For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

books = [
  {"author": "Jeff Smith", "title": "Bone"},
  {"author": "George Orwell", "title": "1984"},
  {"author": "Jeff Smith", "title": "RASL"}
]
book_count = {}

for book in books:
  author = book["author"]
  title = book["title"]
  if author not in book_count:
    book_count[author] = []
  book_count[author].append(title)

print(book_count)

# Given a hash, create a new hash that has the keys and values switched.
# For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

dictionary = {"a": 1, "b": 2, "c": 3}
flipped = {}

for letter in dictionary:
  flipped[dictionary[letter]] = letter

print(flipped)