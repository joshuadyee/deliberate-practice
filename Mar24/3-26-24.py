# CUSTOM CLASSES/METHODS 4  

import random

# Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart:
  def __init__(self):
    self.items = []

  def add_item(self, item):
    self.items.append(item)

  def remove_item(self, item):
    self.items.remove(item)

  def display_items(self):
    print("Items in cart:")
    for item in self.items:
      print(item)

cart = ShoppingCart()
cart.add_item("blueberries")
cart.add_item("oranges")
cart.add_item("apples")
cart.add_item("bananas")
cart.display_items()
cart.remove_item("blueberries")
cart.display_items()

# Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product:
  def __init__(self, name, price, metadata):
    self.name = name
    self.price = price
    self.metadata = metadata

product = Product("laptop", 1000, {"brand": "Apple", "year": "2022", "color": "gray"})
print(product.name)
print(product.price)
print(product.metadata["brand"])
print(product.metadata["year"])
print(product.metadata["color"])


# Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist:
  def __init__(self, name):
    self.name = name
    self.songs = []
  
  def add_song(self, song):
    self.songs.append(song)

  def remove_song(self, song):
    if song in self.songs:
      self.songs.remove(song)

  def shuffle(self):
    random.shuffle(self.songs)

  def display_playlist(self):
    print(f'{self.name}:')
    for song in self.songs:
      print("- " + song)

playlist = Playlist("Kishi")
playlist.add_song("Marigolds")
playlist.add_song("Manchester")
playlist.add_song("m'Lover")
playlist.add_song("Honeybody")
playlist.display_playlist()
playlist.remove_song("m'Lover")
playlist.shuffle()
playlist.display_playlist()

# Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

class Contact:
  def __init__(self, name, age, contact_info):
    self.name = name
    self.age = age
    self.contact_info = contact_info

contact = Contact("Josh", 26, { "last_name": "Yee", "phone_number": "623-343-3434"})
print(contact.name)
print(contact.age)
print(contact.contact_info["last_name"])
print(contact.contact_info["phone_number"])