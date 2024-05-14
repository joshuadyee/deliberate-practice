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
    puts "Items in your cart"
    @items.each do |item|
      puts "- #{item}"
    end
  end
end

cart = ShoppingCart.new
cart.add_item("chicken")
cart.add_item("turkey")
cart.add_item("beef")
cart.display_cart
cart.remove_item("beef")
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

macbook = Product.new(name: "laptop", price: 1000, metadata: {color: "gray", model: "Pro", year: "2022"})
p macbook.name
p macbook.price
p macbook.metadata[:color]
p macbook.metadata[:model]
p macbook.metadata[:year]


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
    puts "#{name} has the following songs:"
    @songs.each { |song| puts " -#{song}" }
  end
end


study = Playlist.new("Study Playlist")
p study.name
study.add_song("On the Nature of Daylight")
study.add_song("Time")
study.add_song("Flight")
study.add_song("Sunshine")
study.display_playlist
p study.shuffle
study.remove_song("Time")
study.display_playlist


# Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.


class Contact
  attr_reader :name, :age, :contact_info
  attr_writer :name, :age, :contact_info

  def initialize(options)
    @name = options[:name]
    @age = options[:age]
    @contact_info = options[:contact_info]
  end
end

contact1 = Contact.new(
  name: "Joshua Yee",
  age: 26,
  contact_info: {phone_num: "838-232-3542", email: "jy@email.com", ig_user: "Yung_Yee"}
)

p contact1.name
p contact1.age
p contact1.contact_info[:phone_num]
p contact1.contact_info[:email]
p contact1.contact_info[:ig_user]
contact1.contact_info[:ig_user] = "JoshDYee"
p contact1.contact_info[:ig_user]
