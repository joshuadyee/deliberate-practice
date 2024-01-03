// Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor() {
    this.items = []
  }

  addItem = item => this.items.push(item)

  removeItem = item => {
    const index = this.items.indexOf(item)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  }

  displayItems = () => {
    console.log("Items in the shopping cart:")
    this.items.forEach(item => {
      console.log("- " + item)
    })
  }
}

const cart = new ShoppingCart
cart.addItem("apples")
cart.addItem("oranges")
cart.addItem("bananas")
cart.addItem("grapes")
cart.displayItems()
cart.removeItem("apples")
cart.displayItems()

// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name
    this.price = price
    this.metadata = metadata
  }
}

const product1 = new Product("Macbook Pro", 1200, {"brand": "Apple", "color": "gray", "year": "2022"})
console.log(product1)
console.log(product1.name)
console.log(product1.price)
console.log(product1.metadata.brand)
console.log(product1.metadata.color)
console.log(product1.metadata.year)

// Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name) {
    this.name = name
    this.songs = []
  }

  addSong = song => this.songs.push(song)

  removeSong = song => {
    const i = this.songs.indexOf(i)
    if (i > -1) {
      this.songs.splice(i, 1)
    }
  }

  displayPlaylist = () => {
    console.log(`Playlist: ${this.name}`)
    console.log('Songs in the playlist:')
    this.songs.forEach(song => {
      console.log("- " + song)
    })
  }
}

const playlist = new Playlist("Study")
playlist.addSong("Tears in Rain")
playlist.addSong("Mountains")
playlist.addSong("Cornfield Chase")
playlist.addSong("Now We Are Free")
playlist.displayPlaylist()

// Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

const Contact = class {
  constructor(name, age, contactInfo) {
    this.name = name
    this.age = age
    this.contactInfo = contactInfo
  }
}

const contact1 = new Contact("Josh", 26, {email: "josh@email.com", phoneNum: "234-234-2343", igHandle: "joshyee_30"})
console.log(contact1)
console.log(contact1["name"])
console.log(contact1["age"])
console.log(contact1.contactInfo["email"])
console.log(contact1.contactInfo["phoneNum"])
console.log(contact1.contactInfo["igHandle"])