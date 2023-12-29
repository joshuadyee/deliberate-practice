// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name
    this.artist = artist
    this.duration = duration
  }
}

const song1 = new Song("Money Trees", "KDot", 5)
console.log(song1)

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}

const rectangle = new Rectangle(12, 5)
console.log(rectangle)

// Write a Person class with attributes for name and age.

const Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const person = new Person("Josh", 26)
console.log(person)

// Write a Location class with attributes for latitude and longitude.

const Location = class {
  constructor(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }
}
const location1 = new Location(93.2323, -23.3434)
console.log(location1)

// Write an Account class with attributes for name and balance.

class Account {
  constructor(name, balance) {
    this.name = name
    this.balance = balance
  }
}
const account1 = new Account("Josh", 1000000)
console.log(account1)

// Write a Movie class with attributes for title, director, and year.

class Movie {
  constructor(title, director, year) {
    this.title = title
    this.director = director
    this.year = year
  }
}
const interstellar = new Movie("Interstellar", "Christopher Nolan", 2014)
console.log(interstellar)

// Write a Car class with attributes for make, model, year, and color.

const Car = class {
  constructor(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
  }
}
const camry = new Car("Toyota", "Camry", 2020, "aqua")
console.log(camry)

// Write a Point class with attributes for x, y, and z coordinates.

class Point {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const theSpot = new Point(3, 5, 7)
console.log(theSpot)

// Write a Book class with attributes for title, author, and year.

const Book = class {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
}
const book1 = new Book("The Sea of Monsters", "Rick Riordan", 2006)
console.log(book1)

// Write a Plant class with attributes for name, size, and price.

class Plant {
  constructor(name, size, price) {
    this.name = name
    this.size = size
    this.price = price
  }
}
const plant1 = new Plant("basil", "medium", 8.99)
console.log(plant1)