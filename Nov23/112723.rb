# ARRAYS/HASHES 3 (8-9), CUSTOM METHODS 1 (1-6)

# Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.

items_hash = {"chair" => 75, "book" => 15}
items = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]

new_hash = {}
i = 0
while i < items.length
  item = items[i]
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

books_hash = {}
i = 0
while i < books.length
  book = books[i]
  author = book[:author]
  title = book[:title]
  if books_hash[author] == nil
    books_hash[author] = []
  end
  books_hash[author] << title
  i += 1
end
p books_hash

# Write a method that takes in a number and returns the number times two. Then run the method and print the result.

def times_two(number)
  return number * 2
end
p times_two(8)


# Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

def all_caps(string)
  return string.upcase
end
p all_caps("football")


# Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

def subtract(num1, num2)
  return num1 - num2
end
p subtract(16, 3)


# Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

def squared(number)
  return number * number
end
p squared(7)


# Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

def first_letter(str)
  return str[0]
end
p first_letter("hello")


# Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

def combine(str1, str2, str3)
  return "#{str1} #{str2} #{str3}"
end
p combine("I", "am", "him")

