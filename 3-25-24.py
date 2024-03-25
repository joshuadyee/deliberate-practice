# CUSTOM METHODS/CLASSES 3

# Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song:
  def __init__(self, name, artist, duration):
    self.name = name
    self.artist = artist
    self.duration = duration

  def print_song(self):
    print(f'{self.name}, by {self.artist} is {self.duration} minutes long.')

song = Song("S.T.A.Y.", "Hans Zimmer", "6:24")
print(song)
song.print_song()

# Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def area(self):
    return self.width * self.height
  
rec = Rectangle(12, 6)
print(rec)
print(rec.area())

# Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def all_caps(self):
    print((self.name).upper())

person = Person("Joshua Yee", 26)
print(person.name)
person.all_caps()

# Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinate:
  def __init__(self, latitude, longitude):
    self.latitude = latitude
    self.longitude = longitude

  def print_coordinate(self):
    print(f'latitude: {self.latitude}, longitude: {self.longitude}')

x = Coordinate(23.2342342, -23.342424)
x.print_coordinate()

# Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

class Account:
  def __init__(self, name, balance):
    self.name = name
    self.balance = balance
   
  def warning(self):
    if self.balance < 100:
      print("WARNING: YOU'RE POOR")
    else:
      print("all good")

account = Account("Josh", 101)
print(account)
account.warning()

# Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie:
  def __init__(self, title, director, year):
    self.title = title
    self.director = director
    self.year = year

  def print_movie(self):
    print(f'{self.title} directed by {self.director}, was released in {self.year}')

movie = Movie("Miss Stevens", "Julia Hart", "2016")
movie.print_movie()

# Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car:
  def __init__(self, make, model, year, color):
    self.make = make
    self.model = model
    self.year = year
    self.color = color

  def print_info(self):
    print(f'Make: {self.make}, Model: {self.model}, Year: {self.year}, Color: {self.color}')

car = Car("Toyota", "Camry", "2020", "aqua")
car.print_info()

# Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

class Point():
  def __init__(self, x, y, z):
    self.x = x
    self.y = y
    self.z = z
    
  def positive(self):
    if self.x > 0 and self.y > 0 and self.z > 0:
      print(True)
    else:
      print(False)

point = Point(2, 4, 33)
point.positive()


# Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

class Book:
  def __init__(self, title, author, year):
    self.title = title
    self.author = author
    self.year = year

  def book_type(self):
    if self.year < 2000:
      print("Classic")
    else:
      print("Modern")
    
book = Book("The Lightning Thief", "Rick Riordan", 2007)
book.book_type()

# Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.

class Plant:
  def __init__(self, name, size, price):
    self.name = name
    self.size = size
    self.price = price
  
  def print_info(self):
    print(f"name: {self.name}, size: {self.size}, price: {self.price}")

plant = Plant("basil", "medium", 9.99)
plant.print_info()