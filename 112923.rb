# CUSTOM CLASSES AND METHODS 3 (6-10)

# Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie
  attr_reader :title, :director, :year
  attr_writer :title, :director, :year
  def initialize(opts)
    @title = opts[:title]
    @director = opts[:director]
    @year = opts[:year]
  end 

  def print_info
    return "#{director} directed #{title} in #{year}."
  end
end

godfather = Movie.new(title: "The Godfather", director: "Francis Ford Coppola", year: 1972)
p godfather.print_info


# Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car
  attr_reader :make, :model
  attr_writer :make, :model
  def initialize(opts)
    @make = opts[:make]
    @model = opts[:model]
    @year = opts[:year]
    @color = opts[:color]
  end

  def make_and_model
    return "This car is a #{make} #{model}."
  end
end

camry = Car.new(make: "Toyota", model: "Camry", year: 2020, color: "blue")
p camry.make_and_model

# Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

class Point
  attr_reader :x, :y, :z
  attr_writer :x, :y, :z
  def initialize(opts)
    @x = opts[:x]
    @y = opts[:y]
    @z = opts[:z]
  end

  def positive
    if x > 0 && y > 0 && z > 0
      return true
    else
      return false 
    end
  end
end

point1 = Point.new(x: 3, y: -4, z: 1)
p point1.positive

# Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

class Book
  attr_reader :title, :author, :year
  attr_writer :title, :author, :year
  def initialize(opts)
    @title = opts[:title]
    @author = opts[:author]
    @year = opts[:year]
  end

  def classic_or_not
    if year <= 2000
      puts "Classic"
    else
      puts "Modern"
    end
  end
end

pj = Book.new(title: "The Last Olympian", author: "Rick Riordan", year: 2007)
pj.classic_or_not 

# Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.


class Plant
  attr_reader :name, :size, :price
  attr_writer :name, :size, :price
  def initialize(opts)
    @name = opts[:name]
    @size = opts[:size]
    @price = opts[:price]
  end

  def print_info
    puts "This #{name} is #{size}cm tall and costs $#{price}."
  end
end

basil = Plant.new(name: "basil", size: 30, price: 5)
basil.print_info