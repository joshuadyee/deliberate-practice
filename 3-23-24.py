# CUSTOM METHODS/CLASSES 2 (1-10)

# Write a Song class with attributes for name, artist, and duration.

class Song:
  def __init__(self, name, artist, duration):
    self.name = name
    self.artist = artist
    self.duration = duration

song = Song("Worm Ride", "Hans Zimmer", "2:43")
print(song)

# Write a Rectangle class with attributes for width and height.

class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

rectangle = Rectangle(12, 6)
print(rectangle)

# Write a Person class with attributes for name and age.

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

person = Person("Joshua", 26)
print(person)

# Write a Location class with attributes for latitude and longitude.

class Location:
  def __init__(self, latitude, longitude):
    self.latitude = latitude
    self.longitude = longitude

location = Location(23.34443, -23.3453)
print(location)

# Write an Account class with attributes for name and balance.

class Account:
  def __init__(self, name, balance):
    self.name = name
    self.balance = balance

account = Account("Josh Yee", 1000000)
print(account.balance)

# Write a Movie class with attributes for title, director, and year.

class Movie:
  def __init__(self, title, director, year):
    self.title = title
    self.director = director
    self.year = year

  def __str__(self):
    return f"Title: {self.title}, Director: {self.director}, Year: {self.year}"
  

movie = Movie("Interstellar", "Christopher Nolan", "2014")
print(movie)

# Write a Car class with attributes for make, model, year, and color.

class Car:
  def __init__(self, make, model, year, color):
    self.make = make
    self.model = model
    self.year = year
    self.color = color

camry = Car("Toyota", "Camry", "2020", "aqua")
print(camry)

# Write a Point class with attributes for x, y, and z coordinates.

class Point:
  def __init__(self, x, y, z):
    self.x = x
    self.y = y
    self.z = z

point = Point(3, 5, 6)
print(point.x)
print(point.y)
print(point.z)

# Write a Book class with attributes for title, author, and year.

class Book:
  def __init__(self, title, author, year):
    self.title = title
    self.author = author
    self.year = year

book = Book("Dune", "Frank Herbert", "1965")
print(book.title)
print(book.author)
print(book.year)

# Write a Plant class with attributes for name, size, and price.

class Plant:
  def __init__(self, name, size, price):
    self.name = name
    self.size = size
    self.price = price

  def __str__(self):
    return f"{self.name}, {self.size}, {self.price}"

plant = Plant("carnation", "large", 12)
print(plant)