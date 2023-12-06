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

  def display_cart
    puts "Items in your cart:"
    @items.each { |item| puts "-#{item}"}
  end
end

cart = ShoppingCart.new
cart.add_item("tuna")
cart.add_item("salmon")
cart.add_item("scallops")
cart.add_item("seabass")
cart.display_cart
cart.remove_item("seabass")
cart.remove_item("salmon")
cart.display_cart


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

product = Product.new(
  name: "laptop",
  price: 1000,
  metadata: {
    color: "black",
    model: "MacBook",
    brand: "Apple"
  }
)
puts product.name
puts product.price
puts product.metadata[:color]
puts product.metadata[:model]
puts product.metadata[:brand]
product.metadata[:color] = "gray"
puts product.metadata[:color]



# Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist
  attr_reader :name
  attr_writer :name
  def initialize(name)
    @name = name
    @songs = []
  end

  def add_song(song)
    @songs << song
  end

  def remove_song(song)
    @songs.delete(song)
  end

  def shuffle
    @songs.shuffle
  end

  def display_playlist
    puts "Songs in #{name}:"
    @songs.each { |song| puts "-#{song}"}
  end
end

playlist = Playlist.new("Rap Playlist")
playlist.add_song("Texas")
playlist.add_song("Camelot")
playlist.add_song("Swimming Pools")
playlist.add_song("Money Trees")
playlist.display_playlist
p playlist.shuffle
playlist.remove_song("Camelot")
playlist.remove_song("Texas")
playlist.display_playlist


# Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

class Contact
  attr_reader :name, :age, :contact_info
  attr_writer :name, :age, :contact_info

  def initialize(opts)
    @name = opts[:name]
    @age = opts[:age]
    @contact_info = opts[:contact_info]
  end
end

contact = Contact.new(
  name: "Joshua Yee", 
  age: 26,
  contact_info: {
    email: "jy@email.com",
    phone_number: "233-343-8989",
    ig_handle: "yung_yee"
  }
)

p contact.name
p contact.age
p contact.contact_info[:email]
p contact.contact_info[:ig_handle]
contact.contact_info[:phone_number] = "646-898-3838"
p contact.contact_info[:phone_number]
