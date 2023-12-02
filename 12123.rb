# CUSTOM CLASSES AND METHODS 4 (1-4)

# Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart
  def initialize
    @items = []
  end

  def add_item(item)
    @items << item
  end

  def remove_item(item)
    @items.delete(item)
  end

  def display_items
    puts "Items in the shopping cart:"
    @items.each { |item| puts "- #{item}" }
  end
end

cart = ShoppingCart.new
cart.add_item("apple")
cart.add_item("banana")
cart.add_item("orange")
cart.add_item("celery")
cart.display_items
cart.remove_item("celery")
cart.display_items


# Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product
  attr_reader :name, :price, :metadata
  attr_writer :name, :price, :metadata

  def initialize(opts)
    @name = opts[:name]
    @price = opts[:price]
    @metadata = opts[:metadata]
  end 
end

laptop = Product.new(name: "MacBook", price: 1000, metadata: {color: "gray", model: "Pro", year: "2020"})
p laptop.name
puts "$#{laptop.price}" 
puts laptop.metadata[:color]
puts laptop.metadata[:model]
puts "This laptop was released in #{laptop.metadata[:year]}."

# Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist
  attr_reader :name, :songs
  attr_writer :name, :songs

  def initialize(name)
    @name = name
    @songs = []
  end

  def add_song(song)
    songs << song
  end

  def remove_song(song)
    songs.delete(song)
  end
end

playlist = Playlist.new("Study Playlist")
p playlist.add_song("Cornfield Chase")
p playlist.add_song("Mountains")
p playlist.add_song("Now We Are Free")

# Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

