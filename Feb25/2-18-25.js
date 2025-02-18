// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}

let pairs = [[1, 3], [8, 9], [2, 16]]
let pairObj = {}

for (let i = 0; i < pairs.length; i++) {
  pairObj[pairs[i][0]] = pairs[i][1]
}

console.log(pairObj)


// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}

let items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]
let itemsObj = {}

for (let i = 0; i < items.length; i++) {
  itemsObj[items[i]['id']] = items[i]
}

console.log(itemsObj)


// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

let string = 'bookkeeper'

function stringToObj(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    let key = str[i]
    // if key doesn't exist in obj, set it to 0
    if (obj[key] === undefined) {
      obj[key] = 0
    }
    // increment key value
    obj[key]++
  }
  return obj
}

console.log(stringToObj(string))


// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]]

let hash = {"chair": 100, "book": 14}
let arr = []

for (let item in hash) {
  arr.push([item, hash[item]])
}

console.log(arr)


// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}]

let people = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}}
let peopleArray = []

for (let id in people) {
  people[id].id = id
  peopleArray.push(people[id])
}

console.log(peopleArray)


// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

let words = ["do", "or", "do", "not"]
let wordCount = {}

for (let word of words) {
  wordCount[word] = (wordCount[word] || 0) + 1
}

// for (let i = 0; i < words.length; i++) {
//   let word = words[i]
//   wordCount[word] = (wordCount[word] || 0) + 1
// }

console.log(wordCount)


// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

let numHash = {"a": 1, "b": 2, "c": 3, "d": 4}
let numArray = []

for (let key in numHash) {
  numArray.push(key, numHash[key])
}

console.log(numArray)


// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

let thingsHash = {chair: 75, book: 15}
let thingsArray = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]

let combinedHash = {}


for (let item of thingsArray) {
  let { name, color, weight } = item
  let price = thingsHash[name]

  combinedHash[name] = { price: price, color: color, weight: weight }
}

console.log(combinedHash)


// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

const books = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}]
const booksHash = {}

for (let book of books) {
  let { author, title } = book
  if (booksHash[author] === undefined) {
    booksHash[author] = []
  }
  booksHash[author].push(title)
}

console.log(booksHash)



// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

let mixedHash = {"a": 1, "b": 2, "c": 3}
let oppoHash = {}

for (let key in mixedHash) {
  let value = mixedHash[key]
  oppoHash[value] = key
}

console.log(oppoHash)