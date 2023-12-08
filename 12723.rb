# ARRAY/HASHES 3 (8-10)

# Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.

items_hash = {"chair" => 75, "book" => 15}
items_array = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]

new_hash = {}
i = 0
while i < items_array.length
  item = items_array[i]
  name = item[:name]
  color = item[:color]
  weight = item[:weight]
  price = items_hash[name]
  new_hash[name] = { price: price, color: color, weight: weight }
  i += 1
end
p new_hash

# Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.

books = [
  {author: "Jeff Smith", title: "Bone"},
  {author: "George Orwell", title: "1984"},
  {author: "Jeff Smith", title: "RASL"}
]

hashed_books = {}

i = 0
while i < books.length
  book = books[i]
  if hashed_books[book[:author]] == nil
    hashed_books[book[:author]] = []
  end
  hashed_books[book[:author]] << book[:title]
  i += 1
end
p hashed_books


# Given a hash, create a new hash that has the keys and values switched.

letter_hash = {"a" => 1, "b" => 2, "c" => 3}

num_hash = {}
letter_hash.each do |letter, number|
  num_hash[number] = letter
end
pp num_hash