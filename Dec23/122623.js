// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

// let names = {firstName: "Josh", lastName: "Yee", email: "jy@email.com"}
// console.log(names["firstName"])
// console.log(names["lastName"])
// console.log(names["email"])

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

let players = [
  {firstName: "Deebo", lastName: "Samuel"},
  {firstName: "Brock", lastName: "Purdy"},
  {firstName: "George", lastName: "Kittle"}
]

console.log(players[0].firstName)
console.log(players[0].lastName)


// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

let menu = {eggs: 12, bacon: 8, sausage: 7}
menu["pancakes"] = 10
console.log(menu)

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

// let books = {title: "The Battle of the Labyrinth", pageCount: 361, language: "English"}
// console.log(books.title)
// console.log(books.pageCount)
// console.log(books.language)


// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

let books = [
  {title: "Rumblefish", author: "S.E. Hinton"},
  {title: "Of Mice and Men", author: "John Steinbeck"},
  {title: "1984", author: "George Orwell"}
]

console.log(books[2].title)


// Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

let states = {california: "Sacramento", newYork: "Albany", texas: "Austin"}
states.nevada = "Carson City"
console.log(states)

// Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

let laptop = {brand: "Apple", model: "MacBook Pro", year: "2022"}
console.log(laptop["brand"])
console.log(laptop.model)
console.log(laptop["year"])

// Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

let laptops = [
  {brand: "Lenovo", model: "ThinkPad X1"},
  {brand: "Apple", model: "MacBook Air"},
  {brand: "Acer", model: "Aspire 3"}
]
console.log(laptops[1].model)

// Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

let definitions = {
  item: "a thing",
  master: "you're looking at him"
} 
definitions.name = "what people call you"
console.log(definitions)

// Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

let shirts = {brand: "Gucci", color: "green", size: "XL"}

console.log(shirts.brand)
console.log(shirts.color)
console.log(shirts.size)


// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

  // If the age is 12 years old or younger, the ticket price is $5.
  // If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
  // If the customer is 60 years old or older, the ticket price is $7.

  let customerAge = 88
  let movieTime = 1900
  let ticketPrice = 0
  
  if (customerAge <= 12) {
    ticketPrice = 5
  } else if (customerAge > 12 && customerAge < 60) {
    if (movieTime < 1800) {
      ticketPrice = 7
    } else {
      ticketPrice = 10
    }
  } else if (customerAge >= 60) {
    ticketPrice = 7
  }
  
console.log(`Ticket price: $${ticketPrice}`)


// Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

  // If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
  // If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
  // If the book is a reference book, there is no fine, regardless of the number of days overdue.
  // If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

let bookType = "regular"
let daysOverdue = 5
let fineAmount = 0

if (bookType === "regular") {
  if (daysOverdue <= 7) {
    fineAmount = 1 * daysOverdue
  } else {
    fineAmount = 2 * daysOverdue
  }
} else if (bookType === "reference") {
  fineAmount = 0
} else if (bookType === "special collection") {
  fineAmount = 5 * daysOverdue
}

console.log(`Fine amount: $${fineAmount}`)

// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

  // If the total order value is less than $50, there is no discount.
  // If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
  // If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

let orderValue = 200
let membership = "premium"
let discount = 0

if (orderValue < 50) {
  discount = 0
} else if (orderValue >= 50 && orderValue <= 100) {
  if (membership === "regular") {
    discount = 0.05 * orderValue
  } else if (membership === "premium") {
    discount = 0.10 * orderValue
  } 
} else {
  if (membership === "regular") {
    discount = 0.10 * orderValue
  } else if (membership === "premium") {
    discount = 0.15 * orderValue
  } 
}

console.log(`Discount: $${discount}`)


// Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

  // If the destination is domestic:
    // If the weight is less than or equal to 1 kg, the shipping fee is $5.
    // If the weight is greater than 1 kg, the shipping fee is $10.
  // If the destination is an international shipment:
    // If the weight is less than or equal to 1 kg, the shipping fee is $15.
    // If the weight is greater than 1 kg, the shipping fee is $25.


let weight = 3
let destination = "international"
let shippingFee = 0

if (destination === "domestic") {
  if (weight <= 1) {
    shippingFee = 5
  } else {
    shippingFee = 10
  }
} else if (destination === "international") {
  if (weight <= 1) {
    shippingFee = 15
  } else {
    shippingFee = 25
  }
}

console.log(shippingFee)