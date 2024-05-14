#LOOPS 3 (8-10) AND ARRAYS/HASHES 2 (1-10)

# Start with an array of strings and create a new array with only the strings that don't start with the letter "b".

strings = ["big", "little", "good", "bad"]

new_strings = []
i = 0 
while i < strings.length
	string = strings[i]
	if string[0] != "b"
		new_strings << string
	end
	i += 1
end
p new_strings

new_strings = []
strings.each do |string|
	if string[0] != "b"
		new_strings << string
	end
end
p new_strings

new_strings = strings.select {|string| string[0] != "b"}
p new_strings


# Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).

items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

new_items = []
i = 0
while i < items.length
	item = items[i]
	if item[:price] < 10
		new_items << item
	end
	i += 1
end
p new_items

new_items = []
items.each do |item|
	if item[:price] < 10
		new_items << item
	end
end
p new_items

new_items = items.select {|item| item[:price] < 10}
p new_items

# Start with an array of numbers and create a new array with only the odd numbers.

numbers = [2, 4, 5, 1, 8, 9, 7]

odd_numbers = []
i = 0
while i < numbers.length
	number = numbers[i]
	if number % 2 > 0
		odd_numbers << number
	end
	i += 1
end
p odd_numbers

odd_numbers = []
numbers.each do |number|
	if number % 2 > 0
		odd_numbers << number
	end
end
p odd_numbers

odd_numbers = numbers.select {|number| number % 2 > 0}
p odd_numbers

# Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = {first_name: "Joshua", last_name: "Yee", email: "joshyee16@gmail.com"}
p person[:first_name]
p person[:last_name]
p person[:email]

# Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [{first_name: "Brock", last_name: "Purdy"}, {first_name: "Deebo", last_name: "Samuel"}, {first_name: "George", last_name: "Kittle"}]
p people[0]


# Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

menu = {burger: 15, fries: 8, milkshake: 7}
menu[:hotdog] = 10
p menu

# Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {title: "The Lightning Thief", author: "Rick Riordan", language: "English"}
p book[:title]
p book[:author]
p book[:language]

# Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
	{title: "The Outsiders", author: "S.E. Hinton"},
	{title: "The Last Olympian", author: "Rick Riordan"},
	{title: "Grapes of Wrath", author: "John Steinbeck"}
]

p books[2][:author]

# Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the

states = {California: "Sacramento", Arizona: "Phoenix", Colorado: "Denver"}
states[:Nevada] = "Carson City"
p states

# Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = {brand: "Apple", model: "MacBook Pro", year: 2022}
p laptop[:brand]
p laptop[:model]
p laptop[:year]

# Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [
	{brand: "Apple", model: "MacBook Air"},
	{brand: "Dell", model: "Alienware"},
	{brand: "HP", model: "Spectre"}
]

p laptops[1][:model]

# Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

definitions = {
	requiem: "a solemn chant for the repose of the dead",
	monadnock: "a residual hill or mountain standing well above the surface of a surrounding area"
}

definitions[:copacetic] = "completely satisfactory"
p definitions

# Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines

shirt = {brand: "Hanes", color: "blue", size: "XL"}
p shirt[:brand]
p shirt[:color]
p shirt[:size]
