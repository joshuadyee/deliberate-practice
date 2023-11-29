# CUSTOM CLASSES AND METHODS 2 (1-4) AND 3 (1-5)

# Write a Song class with attributes for name, artist, and duration.

class Song
  def initialize(name, artist, duration)
    @name = name
    @artist = artist
    @duration = duration
  end
end

song = Song.new("Free Bird", "Lynyrd Skynyrd", "13:35")
p song


# Write a Rectangle class with attributes for width and height.

class Rectangle
  def initialize(width, height)
    @width = width
    @height = height
  end
end

rectangle = Rectangle.new(7, 8)
p rectangle


# Write a Person class with attributes for name and age.

class Person
  attr_reader :name, :age
  attr_writer :name, :age
  def initialize(name, age)
    @name = name
    @age = age
  end
end

person = Person.new("Joshua", 26)
p person.name


# Write a Location class with attributes for latitude and longitude.

class Location
  def initialize(options)
    @latitude = options[:latitude]
    @longitude = options[:longitude]
  end
end


los_angeles = Location.new(latitude: 84.8338, longitude: 46.8484)
p los_angeles


# Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song
  attr_reader :name, :artist, :duration
  attr_writer :name, :artist, :duration
  def initialize(options)
    @name = options[:name]
    @artist = options[:artist]
    @duration = options[:duration]
  end

  def print_info
    p "The title of the song is #{name}, the artist is #{artist}, and the song lasts #{duration} minutes."
  end
end


song1 = Song.new(name: "Free Bird", artist: "Lynyrd Skynyrd", duration: 13.5)
song1.print_info


# Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle
  attr_reader :width, :height
  attr_writer :width, :height
  def initialize(options)
    @width = options[:width]
    @height = options[:height]
  end

  def area
    return @width * @height 
  end
end

rectangle = Rectangle.new(width: 7,height: 4)
p rectangle.area


# Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person
  attr_reader :age, :name
  attr_writer :age, :name
  def initialize(options)
    @name = options[:name]
    @age = options[:age]
  end

  def upcased_name
    return name.upcase
  end
end

jy = Person.new(name: "Joshua", age: 26)
p jy.upcased_name


# Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinate
  attr_reader :latitude, :longitude
  attr_writer :latitude, :longitude
  def initialize(options)
    @latitude = options[:latitude]
    @longitude = options[:longitude]
  end

  def location
    p "The latitude is #{latitude} and the longitude is #{longitude}."
  end
end

chicago = Coordinate.new(latitude: 41.8781, longitude: 87.6298)
chicago.location


# Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.


class Account
  attr_reader :name, :balance
  attr_writer :name, :balance
  def initialize(opts)
    @name = opts[:name]
    @balance = opts[:balance]
  end

  def warning
    if balance < 100
      puts "Warning! You're poor!"
    end
  end
end

my_account = Account.new(name: "Checking", balance: 75)
my_account.warning