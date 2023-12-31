// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name
    this.artist = artist
    this.duration = duration
  }

  printInfo = () => console.log(
    `The song is ${this.name}, the artist is ${this.artist}, and the duration is ${this.duration} minutes.`
  )
}
const song1 = new Song("Higher Love", "Steve Winwood", 3) 
song1.printInfo()

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area = () => console.log(this.width * this.height)
}
const rectangle1 = new Rectangle(3, 8)
console.log(rectangle1)
rectangle1.area()

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

const Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  allCaps = () => this.name.toUpperCase()
  
}
const person1 = new Person("Josh", 26)
console.log(person1)
console.log(person1.allCaps())

// Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinate { 
  constructor(longitude, latitude) {
    this.latitude = latitude
    this.longitude = longitude
  }

  printLocation = () => console.log(
    `The latitude is ${this.latitude} degrees, the longitude is ${this.longitude} degrees.`
  )
}

const coordinate1 = new Coordinate(83.34, 93.39)
coordinate1.printLocation()

// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

const Account = class {
  constructor(name, balance) {
    this.name = name
    this.balance = balance
  }

  poorWarning = () => {
    if (this.balance < 100) {
      console.log("WARNING: YOU'RE POOR!")
    } else {
      console.log("YOU'RE GOOD FOR NOW")
    }
  }
}

const account1 = new Account('Josh', 101)
account1.poorWarning()

// Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie {
  constructor(title, director, year) {
    this.title = title
    this.director = director
    this.year = year
  }

  movieInfo = () => console.log(
    `Directed by ${this.director}, ${this.title} was released in ${this.year}.`
  )
}

const interstellar = new Movie("Interstellar", "Christoper Nolan", 2014)
interstellar.movieInfo()

// Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car {
  constructor(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
  }

  makeAndModel = () => console.log(
    `This car is a ${this.make} ${this.model}.`
  )
}

const camry = new Car('Toyota', 'Camry', 2020, 'green')
camry.makeAndModel()

// Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

const Point = class {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  positiveOrNot = () => {
    if (this.x > 0 && this.y > 0 && this.z > 0) {
      console.log(true)
    } else {
      false
    }
  }
}

const point1 = new Point(3, 5, -1)
// console.log(point1.positiveOrNot())

// Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  bookType = () => {
    if (this.year < 2000) {
      return 'Classic'
    } else {
      return 'Modern'
    }
  }
}

const book1 = new Book("The Lightning Thief", "Rick Riordan", 2005)
console.log(book1.bookType())


// Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.

const Plant = class {
  constructor(name, size, price) {
    this.name = name 
    this.size = size 
    this.price = price 
  }

  printInfo = () => console.log(
    `This is a ${this.size} ${this.name} plant and costs $${this.price}.`
  )
}

const basil = new Plant('basil', 'medium', 8.99)
basil.printInfo()