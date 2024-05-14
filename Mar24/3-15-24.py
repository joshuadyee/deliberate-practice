# ARRAYS/HASHES 2 (1-10)

# Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = {"first_name": "Josh", "last_name": "Yee", "email": "josh@email.com"}

print(person["first_name"])
print(person["last_name"])
print(person["email"])

# Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [
  {"first": "Christian", "last": "McCaffrey"},
  {"first": "Deebo", "last": "Samuel"},
  {"first": "George", "last": "Kittle"},
]

for person in people:
  print(person["first"])

# Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

menu = {
  "fries": 10,
  "chips": 5, 
  "burger": 12
}

menu["hot dog"] = 9
print(menu)

# Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {
  "title": "Dune",
  "author": "Frank Herbert",
  "page count": 400, 
  "language": "English"
}

for x in book:
  print(book[x])

# Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
  {"title": "The Lightning Thief", "author": "Rick Riordan"},
  {"title": "The Last Olympian", "author": "Rick Riordan"},
  {"title": "Dune: Messiah", "author": "Frank Herbert"}
]

print(books[2]["author"])


# Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.

states = {
  "California": "Sacramento",
  "New York": "Albany",
  "Arizona": "Phoenix"
}

states["Nevada"] = "Carson City"
print(states)

# Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = {
  "brand": "Apple",
  "model": "MacBook",
  "year": "2022"
}

for key in laptop:
  print(laptop[key])

# Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

definitions = {
  "pyrrhic": "won at too great a cost to have been worthwhile for the victor",
  "duende": "charm, magnetism"
}

definitions["defenestrate"] = "to throw a thing out of a window"
print(definitions)

# Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = {
  "brand": "Hanes",
  "color": "green",
  "size": "XL"
}

for attribute in shirt:
  print(shirt[attribute])